import { Animal } from 'src/animals/entities/animal.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sex_animals' })
export class SexAnimal {
  @PrimaryGeneratedColumn()
  id_sex_animal: number;

  @Column({ type: 'varchar', length: 50 })
  sex: string;
  
  @ManyToOne(()=> Animal, (animal)=> animal.sexAnimal)
  @JoinColumn({name: 'id_sex_animal'})
  animal: Animal;
}
