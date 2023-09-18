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

  @OneToMany(() => GenderUser, (gender_user) => gender_user.user)
  gender_user: GenderUser;

  @OneToOne(() => Photo, { eager: true })
  @JoinColumn({ name: 'id_photo' })
  photo: Photo;

  @ManyToOne(() => Animal, (animal) => animal.user)
  @JoinColumn({ name: 'id_user' })
  animal: Animal;

  @ManyToOne(() => Message, (message) => message.sender)
  @JoinColumn({ name: 'id_user' })
  messageSent: Message;

  @ManyToOne(() => Message, (message) => message.receiver)
  @JoinColumn({ name: 'id_user' })
  messageReceived: Message;
}
