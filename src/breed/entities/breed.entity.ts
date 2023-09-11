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

@Entity('breed')
export class Breed {
  @PrimaryGeneratedColumn()
  id_breed: number;

  @Column()
  breed: string;

  @Column()
  id_species: number;

  @ManyToOne(() => Animal, (animal) => animal.breed)
  @JoinColumn({ name: 'id_breed' })
  animal: Animal;

  @OneToMany(() => Species, (species) => species.breed)
  @JoinColumn({ name: 'id_species' })
  species: Species;
}
