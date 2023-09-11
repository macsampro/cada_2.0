// import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSexAnimalDto {


  @ApiProperty()
  //   @IsNotEmpty()
  sex: string;
}
