import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'gender_users' })
export class GenderUser {
  @PrimaryGeneratedColumn()
  id_gender_user!: number;

  @Column()
  gender: string;
}
