import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('species')
export class Species {

    @PrimaryGeneratedColumn()
    id_species: number;

    @Column({ type: 'varchar', length: 255})
    species: string;
}
