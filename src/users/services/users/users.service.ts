import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}
    
    getUsers() {
        return this.userRepository.find();
    }
    
    createUser(userParams: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userParams,
            dateCreation: new Date(),
        });
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserParams: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserParams });
      }

}
