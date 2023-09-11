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

  @Column({ length: 100 })
  breed: string;

  @ManyToOne(() => Animal)
  @JoinColumn({ name: 'id_animals' })
  animal: Animal;

  @OneToMany(() => Species, (species) => species.breed)
  species: Species;
}
//create table breed (id_breed serial primary key,
//breed varchar (255) not null,
//id_species int not null references species(id_species));
