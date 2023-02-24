import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import { CreateUserParams } from 'src/utils/types';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    
    createUser(userParams: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userParams,
            dateCreation: new Date(),
        });
        return this.userRepository.save(newUser);
    }

}
