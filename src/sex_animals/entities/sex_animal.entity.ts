import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sex_animals')
export class SexAnimal {
  @PrimaryGeneratedColumn()
  id_sex_animal: number;

  @Column({ type: 'varchar', length: 50 })
  nom: string;
}
