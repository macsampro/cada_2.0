import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id_message!: number;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  message: string;
}
