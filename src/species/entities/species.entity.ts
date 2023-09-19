import { Breed } from 'src/breed/entities/breed.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'species' })
export class Species {
  @PrimaryGeneratedColumn()
  id_species: number;

  @Column({ type: 'varchar', length: 255 })
  species: string;

  @OneToMany(() => Breed, (breed) => breed.species)
  breed: Breed[];
}
