import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id_message!: number;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  message: Text;

  //   @ManyToOne((type) => User, (user) => user.sentMessages,{ eager: true }))
  //   @JoinColumn({ name: 'id_user_send' })
  //   sender: User;

  //   @ManyToOne((type) => User, (user) => user.receivedMessages,{ eager: true }))
  //   @JoinColumn({ name: 'id_user_received' })
  //   receiver: User;
}
