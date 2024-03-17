import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class AuthDto {
  //emailかどうかを判定
  @IsEmail()
  //中身が空じゃないことを判定
  @IsNotEmpty()
  email: string;

  //文字列であるかを判定
  @IsString()
  @IsNotEmpty()
  password: string;
}
