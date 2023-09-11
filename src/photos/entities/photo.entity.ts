import { Animal } from 'src/animals/entities/animal.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'photos' })
export class Photo {
  @PrimaryGeneratedColumn()
  id_photo: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  path: string;

  @OneToOne(() => Animal)
  @JoinColumn({ name: id_animals })
  receiver: Animal;

  @OneToOne(() => Users)
  @JoinColumn({ name: id_user })
  receiver: Users;
}
