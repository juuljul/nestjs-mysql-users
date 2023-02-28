import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Identity } from 'src/typeorm/entities/Identity';
import { Vehicle } from 'src/typeorm/entities/Vehicle';
import { User } from '../typeorm/entities/User';

import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Identity, Vehicle])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
