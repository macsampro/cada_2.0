// import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBreedDto {
  @ApiProperty()
  id_breed: number;

  @ApiProperty()
  //   @IsNotEmpty()
  nom: string;
}
