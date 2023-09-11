import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id_message!: number;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  message: Text;

  // @OneToMany(() => User, (user) => user.message, { eager: true })
  // sender: User;

  // @OneToMany(() => User, (user) => user.message, { eager: true })
  // receiver: User;

}
