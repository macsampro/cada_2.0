import { Animal } from 'src/animals/entities/animal.entity';
import { Species } from 'src/species/entities/species.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Breed')
export class Breed {
  @PrimaryGeneratedColumn()
  id_breed: number;

  @Column()
  nom: string;
}
