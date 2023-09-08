import { ApiProperty } from "@nestjs/swagger";

export class CreateAnimalDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    // @ApiProperty()
    // id_user: number;

    // @ApiProperty()
    // id_breed: number;

    // @ApiProperty()
    // id_photo: number;

    // @ApiProperty()
    // id_sex_animal: number;

}
