import { Animal } from 'src/animals/entities/animal.entity';
import { GenderUser } from 'src/gender_users/entities/gender_user.entity';
import { Message } from 'src/messages/entities/message.entity';
import { Photo } from 'src/photos/entities/photo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @ManyToOne(() => GenderUser, (gender_user) => gender_user.user, {
    eager: true,
  })
  @JoinColumn({ name: 'id_gender_user' })
  gender_user: GenderUser;

  @OneToOne(() => Photo, { eager: true, cascade: true })
  @JoinColumn({ name: 'id_photo' })
  photo: Photo;

  @OneToMany(() => Animal, (animal) => animal.user, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'id_user' })
  animal: Animal;

  @OneToMany(() => Message, (message) => message.sender, { cascade: true })
  messageSent: Message[];

  @OneToMany(() => Message, (message) => message.receiver, { cascade: true })
  messageReceived: Message[];
}
