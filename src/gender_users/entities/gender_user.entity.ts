import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'gender_users' })
export class GenderUser {
  @PrimaryGeneratedColumn()
  id_gender_user: number;

  @Column()
  gender: string;

  @OneToMany(() => User, (user) => user.gender_user)
  @JoinColumn({ name: 'id_gender_user' })
  user: User;
}
