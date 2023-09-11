import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id_message!: number;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  message: string;

  @Column()
  id_user_send: number;

  @Column()
  id_user_received: number;

  @OneToMany(() => User, (user) => user.messageSent, { eager: true })
  sender: User;

  @OneToMany(() => User, (user) => user.messageReceived, { eager: true })
  receiver: User;
}
