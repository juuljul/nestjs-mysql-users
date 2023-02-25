import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne
  } from 'typeorm';
import { Identity } from './Identity';
  
  @Entity({ name: 'users' })
  export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
  
    @Column({ unique: true })
    username: string;
  
    @Column()
    password: string;
  
    @Column()
    dateCreation: Date;

    @OneToOne(() => Identity)
    @JoinColumn()
    identity: Identity;
  
  }
  