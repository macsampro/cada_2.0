import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id_message!: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ nullable: false })
  message: string;

  @ManyToOne(() => User, (user) => user.messageSent, { eager: true })
  @JoinColumn({ name: "id_user_send" }) 
  sender: User;

  @ManyToOne(() => User, (user) => user.messageReceived, { eager: true })
  @JoinColumn({ name: "id_user_received" }) 
  receiver: User;

}
