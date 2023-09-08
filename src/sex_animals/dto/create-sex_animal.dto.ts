// import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSexAnimalDto {
  @ApiProperty()
  id_sex_animal: number;

  @ApiProperty()
  //   @IsNotEmpty()
  nom: string;
}
