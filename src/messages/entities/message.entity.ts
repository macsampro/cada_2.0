import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id_message!: number;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  message: string;

//   @ManyToOne((type) => User, (user) => user.sentMessages) 
//   @JoinColumn({ name: 'id_user_send' }) 
//   sender: User;

//   @ManyToOne((type) => User, (user) => user.receivedMessages) 
//   @JoinColumn({ name: 'id_user_received' }) 
//   receiver: User;
}
