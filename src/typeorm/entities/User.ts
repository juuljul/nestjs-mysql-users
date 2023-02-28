import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    OneToMany
  } from 'typeorm';
import { Identity } from './Identity';
import { Vehicle } from './Vehicle';
  
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

    @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
    vehicles: Vehicle[];
  }
  