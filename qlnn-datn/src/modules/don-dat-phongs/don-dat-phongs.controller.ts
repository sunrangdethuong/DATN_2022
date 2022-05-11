import { SearchDto } from './../../dto/don-dat-phongs/search.dto';
import { CreateDonDatPhongDto } from './../../dto/don-dat-phongs/create-don-dat-phong.dto';
import { DonDatPhongDto } from './../../dto/don-dat-phongs/don-dat-phong.dto';
import { DonDatPhong } from './../../entities/don-dat-phong.entity';
import { JwtAuthGuard } from './../auths/guards/jwt-auth.guard';
import { DonDatPhongsService } from './don-dat-phongs.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

@Controller('don-dat-phongs')
export class DonDatPhongsController {
  constructor(private readonly donDatPhongsService: DonDatPhongsService) {}

  //@UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<DonDatPhong[]> {
    return this.donDatPhongsService.getAll();
  }

  @Post('/create')
  async create(@Body() dto: CreateDonDatPhongDto): Promise<DonDatPhong> {
    return this.donDatPhongsService.createDonDatPhong(dto);
  }

  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DonDatPhongDto,
  ): Promise<DonDatPhong> {
    return this.donDatPhongsService.updateDonDatPhong(id, dto);
  }

  @Patch('/thanh-toan/:id')
  async thanhToan(@Param('id', ParseIntPipe) id: number): Promise<DonDatPhong> {
    return this.donDatPhongsService.thanhToan(id);
  }

  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.donDatPhongsService.deleteDonDatPhong(id);
  }


  //@UseGuards(JwtAuthGuard)
  @Get('/search')
  async searchDonDatPhongs(@Query() dto: SearchDto): Promise<DonDatPhong[]> {
    return this.donDatPhongsService.searchDonDatPhongs(dto);
  }
  @Get('/year')
  async getSumCostByMonth(): Promise<number[]> {
    return this.donDatPhongsService.getSumCostByMonth();
  }

  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  async getDonDatPhongById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DonDatPhong> {
    return this.donDatPhongsService.getDonDatPhongById(id);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('/status/:id')
  async getDonDatPhongByStatus(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DonDatPhong[]> {
    return this.donDatPhongsService.getDonDatPhongByStatus(id);
  }

}
