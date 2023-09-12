import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
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
  id_gender_user: number;
  
}
