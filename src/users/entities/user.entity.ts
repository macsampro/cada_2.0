import { GenderUser } from 'src/gender_users/entities/gender_user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  //   @ManyToOne(() => GenderUser, (id_gender_user) => id_gender_user)
  //   id_gender_user: GenderUser;

  @ManyToOne(() => GenderUser)
  @JoinColumn({ name: 'id_gender_user' })
  id_gender_User: GenderUser;

  //   @OneToOne(() => Photo)
  //   @JoinColumn()
  //   id_photo: Photo;
}
