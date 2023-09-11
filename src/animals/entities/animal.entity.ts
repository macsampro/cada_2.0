import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'animals' })
export class Animal {
  @PrimaryGeneratedColumn()
  id_animals: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column('int')
  age: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'id_user' })
  // user: User;

  // @ManyToOne(() => Breed)
  // @JoinColumn({ name: 'id_breed' })
  // breed: Breed;

  // @ManyToOne(() => Photo)
  // @JoinColumn({ name: 'id_photo' })
  // photo: Photo;

  // @ManyToOne(() => SexAnimal)
  // @JoinColumn({ name: 'id_sex_animal' })
  // sexAnimal: SexAnimal;
}
