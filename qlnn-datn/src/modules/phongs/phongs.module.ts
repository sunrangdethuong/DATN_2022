import { DonDatPhongRepository } from './../../repositories/don-dat-phong.repository';
import { PhongsService } from './phongs.service';
import { PhongsController } from './phongs.controller';
import { PhongRepository } from './../../repositories/phong.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PhongRepository, DonDatPhongRepository])],
  controllers: [PhongsController],
  providers: [PhongsService],
  exports: [PhongsService],
})
export class PhongsModule {}
