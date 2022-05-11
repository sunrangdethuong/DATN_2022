import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { IsDateCheckOut } from './CustomValidateCheckOut';

export class DonDatPhongDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  readonly tenKhachHang: string;

  @IsNotEmpty()
  @IsString()
  readonly soCMT: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @Type(() => Date)
  @IsDate()
  readonly checkIn: Date;

  @Type(() => Date)
  @IsDate()
  @IsDateCheckOut('checkIn', { message: 'CheckOut phải lớn hơn CheckIn' })
  readonly checkOut: Date;

  @IsNotEmpty()
  @IsNumber()
  readonly cost: number;

  @IsNotEmpty()
  @IsNumber()
  readonly status: number;

  @IsString()
  readonly note: string;
}
