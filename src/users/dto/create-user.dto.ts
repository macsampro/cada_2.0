import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  firstname: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  departement: number;

  @ApiProperty()
  id_photo: number;

  @ApiProperty()
  id_gender_user: number;
}
