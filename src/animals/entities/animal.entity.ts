import { Breed } from 'src/breed/entities/breed.entity';
import { Photo } from 'src/photos/entities/photo.entity';
import { SexAnimal } from 'src/sex_animals/entities/sex_animal.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'animals' })
export class Animal {
  @PrimaryGeneratedColumn()
  id_animals: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column('int')
  age: number;

  @Column()
  id_user: number;

  @Column()
  id_breed: number;

  @Column()
  id_photo: number;

  @Column()
  id_sex_animal: number;

  @ManyToOne(() => User, (user) => user.animal, { eager: false })
  @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToOne(() => Breed, (breed) => breed.animal, { eager: true })
  @JoinColumn({ name: 'id_breed' })
  breed: Breed;

  @OneToOne(() => Photo, { eager: true })
  @JoinColumn({ name: 'id_photo' })
  photo: Photo;

  @ManyToOne(() => SexAnimal, (sexAnimal) => sexAnimal.animal, { eager: true })
  @JoinColumn({ name: 'id_sex_animal' })
  sexAnimal: SexAnimal;
}
