import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'user_vehicles' })
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  typeVehicle: string;

  @Column()
  brand: string;

  @Column()
  dateCreation: number;

  @ManyToOne(() => User, (user) => user.vehicles)
  user: User;
}
