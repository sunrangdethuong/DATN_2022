import { SearchPhongDto } from './../../dto/phongs/search-phong.dto';
import { DonDatPhongRepository } from './../../repositories/don-dat-phong.repository';
import { PhongDto } from './../../dto/phongs/phong.dto';
import { Phong } from './../../entities/phong.entity';
import { PhongRepository } from './../../repositories/phong.repository';
import { Injectable } from '@nestjs/common';
import { Between, In, Not } from 'typeorm';

@Injectable()
export class PhongsService {
  constructor(
    private readonly phongRepository: PhongRepository,
    private readonly donDatPhongRepository: DonDatPhongRepository,
  ) {}

  async getAll(): Promise<Phong[]> {
    return await this.phongRepository.find();
  }

  async createPhong(dto: PhongDto): Promise<Phong> {
    const phong = await this.phongRepository.create(dto);
    return await this.phongRepository.save(phong);
  }

  async updatePhong(id: number, dto: PhongDto): Promise<Phong> {
    const newPhong = await this.phongRepository.create(dto);
    const oldPhong = await this.phongRepository.findOne(id);
    const updatePhong = Object.assign(oldPhong, newPhong);
    return await this.phongRepository.save(updatePhong);
  }

  async deletePhong(id: number): Promise<string> {
    await this.phongRepository.delete(id);
    return 'Delete successfull!';
  }

  async getPhongById(id: number): Promise<Phong> {
    return await this.phongRepository.findOne(id);
  }

  async getPhongByStatus(status: number): Promise<Phong[]> {
    return await this.phongRepository.find({ where: { status: status } });
  }

  async updateStatus(id: number, status: number): Promise<Phong> {
    const newPhong = await this.phongRepository.findOne(id);
    newPhong.status = status;
    const oldPhong = await this.phongRepository.findOne(id);
    const updatePhong = Object.assign(oldPhong, newPhong);
    return await this.phongRepository.save(updatePhong);
  }

  async getPhongByDate(dto: SearchPhongDto): Promise<Phong[]> {
    const a = new Date(dto.checkIn);
    const b = new Date(dto.checkOut);
    const listDDP = await this.donDatPhongRepository.find({
      where: [
        { checkIn: Between(a, b) },
        { checkOut: Between(a, b) },
      ],
      relations: ['phong'],
    });
    const listId = listDDP.map((element) => element.phong.id);
    const listPhong = await this.phongRepository.find({
      where: { id: Not(In(listId))},
    });
    return listPhong;
  }
}
