import { ApiProperty } from "@nestjs/swagger";

export class CreateSpeciesDto {

    @ApiProperty()
    id_species: number;

    @ApiProperty()
    species: string;
}

