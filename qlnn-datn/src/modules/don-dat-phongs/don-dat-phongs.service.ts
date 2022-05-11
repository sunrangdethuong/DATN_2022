import { SearchDto } from './../../dto/don-dat-phongs/search.dto';
import { CreateDonDatPhongDto } from './../../dto/don-dat-phongs/create-don-dat-phong.dto';
import { PhongsService } from './../phongs/phongs.service';
import { DonDatPhongDto } from './../../dto/don-dat-phongs/don-dat-phong.dto';
import { DonDatPhong } from './../../entities/don-dat-phong.entity';
import { PhongRepository } from './../../repositories/phong.repository';
import { DonDatPhongRepository } from './../../repositories/don-dat-phong.repository';
import { Injectable } from '@nestjs/common';
import { MoreThan } from 'typeorm';

@Injectable()
export class DonDatPhongsService {
  constructor(
    private readonly donDatPhongRepository: DonDatPhongRepository,
    private readonly phongRepository: PhongRepository,
    private readonly phongsService: PhongsService,
  ) {}

  async getAll(): Promise<DonDatPhong[]> {
    return await this.donDatPhongRepository.find({ relations: ['phong'] });
  }

  async createDonDatPhong(dto: CreateDonDatPhongDto): Promise<DonDatPhong> {
    const phong = await this.phongsService.updateStatus(dto.phongId, 1);
    const donDatPhong = await this.donDatPhongRepository.create({
      ...dto,
      phong: phong,
    });
    await this.donDatPhongRepository.save(donDatPhong);
    return await this.donDatPhongRepository.findOne(donDatPhong.id);
  }

  async updateDonDatPhong(
    id: number,
    dto: DonDatPhongDto,
  ): Promise<DonDatPhong> {
    const newDonDatPhong = await this.donDatPhongRepository.create(dto);
    const olddonDatPhong = await this.donDatPhongRepository.findOne(id);
    const updateDonDatPhong = Object.assign(olddonDatPhong, newDonDatPhong);
    await this.donDatPhongRepository.save(updateDonDatPhong);
    return this.getDonDatPhongById(id);
  }

  async thanhToan(id: number): Promise<DonDatPhong> {
    const donDatPhong = await this.donDatPhongRepository.findOne(id, {
      relations: ['phong'],
    });
    const oldPhong = await this.phongRepository.findOne(donDatPhong.phong.id);
    await this.phongsService.updateStatus(oldPhong.id, 0);
    const newDonDatPhong = donDatPhong;
    newDonDatPhong.status = 1;
    const updateDonDatPhong = Object.assign(donDatPhong, newDonDatPhong);
    await this.donDatPhongRepository.save(updateDonDatPhong);
    return this.getDonDatPhongById(id);
  }

  async deleteDonDatPhong(id: number): Promise<string> {
    const donDatPhong = await this.donDatPhongRepository.findOne(id, {
      relations: ['phong'],
    });
    const oldPhong = await this.phongRepository.findOne(donDatPhong.phong.id);
    await this.phongsService.updateStatus(oldPhong.id, 0);
    await this.donDatPhongRepository.delete(id);
    return 'Delete successfull!';
  }

  async getDonDatPhongById(id: number): Promise<DonDatPhong> {
    return await this.donDatPhongRepository.findOne(id, {
      relations: ['phong'],
    });
  }

  async searchDonDatPhongs(dto: SearchDto): Promise<DonDatPhong[]> {
    return await this.donDatPhongRepository.find({
      where: [
        { tenKhachHang: dto.search },
        { soCMT: dto.search },
        { phone: dto.search },
      ],
      relations: ['phong'],
    });
  }

  async getDonDatPhongByStatus(status: number): Promise<DonDatPhong[]> {
    return await this.donDatPhongRepository.find({
      where: { status: status },
      relations: ['phong'],
    });
  }

  async getSumCostByMonth(): Promise<number[]> {
    const listDDP = await this.donDatPhongRepository.find({
      where: { checkIn: MoreThan(new Date(new Date().getFullYear(), 0, 1)) },
    });
    const listSumCost: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < listDDP.length; j++) {
        if (new Date(listDDP[j].checkIn).getMonth() === i + 1) {
          listSumCost[i] += listDDP[j].cost;
        }
      }
    }
    return listSumCost;
  }
}
