import { GenderUser } from 'src/gender_users/entities/gender_user.entity';
import {
  Column,
  Entity,
  OneToMany,
  //   JoinColumn,
  //   OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id_user!: number;

  @Column()
  username: string;

  @Column()
  firstname: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  city: string;

  @Column()
  password: string;

  @Column()
  departement: number;

  @Column()
  id_gender_user: number;

  @Column()
  id_photo: number;

  @OneToMany(() => GenderUser, (gender_user) => gender_user.user, {
    eager: true,
  })
  gender_user: GenderUser;

  //   @OneToOne(() => Photo)
  //   @JoinColumn()
  //   id_photo: Photo;

  // @ManyToOne(() => Animal, (animal) => animal.user)
  // animal: Animal;

  //   @ManyToOne(() => Message, (message) => message.user)
  //   message: Message;

  //   @ManyToOne(() => Message, (message) => message.user)
  //   message: Message;
  // }
}
