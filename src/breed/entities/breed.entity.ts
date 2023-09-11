import { Animal } from 'src/animals/entities/animal.entity';
import { Species } from 'src/species/entities/species.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Breed')
export class Breed {
  @PrimaryGeneratedColumn()
  id_breed: number;

  @Column({ type: 'varchar', length:255 })
  nom: string;

  // @ManyToOne(()=> Animal, (animal)=> animal.breed)
  // animal:Animal;

  // @OneToMany(()=> Species, (species)=> species.breed)
  // breed: Breed;
}
