import { IsNotEmpty, IsString } from 'class-validator';

export class ChangePassordDto {
  @IsNotEmpty()
  @IsString()
  readonly oldPass: string;

  @IsNotEmpty()
  @IsString()
  readonly newPass: string;
}
