import { SexAnimal } from "src/sex_animals/entities/sex_animal.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity({ name: 'animals' })
export class Animal {

    @PrimaryGeneratedColumn()
    id_animals: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column('int')
    age: number;

    // @OneToMany(() => User, (user)=> user.animals)
    // user: User;

    // @OneToMany(() => Breed, (breed)=> breed.animals)
    // breed: Breed;

    // @OneToOne(() => Photo)
    // @JoinColumn({ name: 'id_photo' })
    // photo: Photo;

    @OneToMany(() => SexAnimal, (sexAnimal) => sexAnimal.animal)
    sexAnimal: SexAnimal;
}
