import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 120, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 75, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  troop: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  district: string;

  @Column({ type: 'varchar', length: 4096, nullable: false })
  password: string;

  @Column( {type: 'enum', enum: ['admin', 'użytkownik'], default: 'użytkownik'})
  role: 'użytkownik' | 'admin';

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;
}