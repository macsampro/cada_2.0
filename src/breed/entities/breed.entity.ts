import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Breed')
export class Breed {
  @PrimaryGeneratedColumn()
  id_breed: number;

  @Column()
  nom: string;
}
