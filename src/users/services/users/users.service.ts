import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import { CreateUserParams, UpdateUserParams, CreateUserIdentityParams, CreateUserVehicleParams } from 'src/utils/types';
import { Identity } from 'src/typeorm/entities/Identity';
import { Vehicle } from 'src/typeorm/entities/Vehicle';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Identity) private identityRepository: Repository<Identity>,
        @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>,
    ) {}
    
    getUsers() {
        return this.userRepository.find({ relations: ['identity'] });
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

    deleteUser(id: number) {
        return this.userRepository.delete({ id });
    }

    async createUserIdentity(
        id: number,
        createUserIdentityParams: CreateUserIdentityParams,
      ) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
          throw new HttpException(
            'User not found. Cannot create Identity',
            HttpStatus.BAD_REQUEST,
          );
        const newIdentity = this.identityRepository.create(createUserIdentityParams);
        const savedIdentity = await this.identityRepository.save(newIdentity);
        user.identity = savedIdentity;
        return this.userRepository.save(user);
      }

    async createUserVehicle(
      id: number,
      createUserVehicleParams: CreateUserVehicleParams,
    ) {
      const user = await this.userRepository.findOneBy({ id });
      if (!user)
        throw new HttpException(
          'User not found. Cannot create Vehicle',
          HttpStatus.BAD_REQUEST,
        );
      const newVehicle = this.vehicleRepository.create({
        ...createUserVehicleParams,
        user,
      });
      return this.vehicleRepository.save(newVehicle);
    }

}
