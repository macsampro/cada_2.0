import { Animal } from 'src/animals/entities/animal.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'sex_animals' })
export class SexAnimal {
  @PrimaryGeneratedColumn()
  id_sex_animal: number;

  @Column({ type: 'varchar', length: 50 })
  sex: string;

  @OneToMany(() => Animal, (animal) => animal.sexAnimal)
  @JoinColumn({ name: 'id_sex_animal' })
  animal: Animal;
}
