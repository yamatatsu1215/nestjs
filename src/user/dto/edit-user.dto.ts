import {
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditUserDto {
  @IsEmail()
  //未設定項目をチェック対象外にする
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
