import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'photos' })
export class Photo {
  @PrimaryGeneratedColumn()
  id_photo: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @Column()
  description: string;
}
