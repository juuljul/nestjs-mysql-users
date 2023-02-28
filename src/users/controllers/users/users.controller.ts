import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { CreateUserIdentityDto } from '../../dtos/CreateUserIdentity.dto';
import { CreateUserVehicleDto } from '../../dtos/CreateUserVehicle.dto';
import { UpdateUserDto } from '../../dtos/UpdateUser.dto';
import { UsersService } from '../../services/users/users.service';


@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }

  @Post(':id/identities')
  createUserIdentity(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserIdentityDto: CreateUserIdentityDto,
  ) {
    return this.userService.createUserIdentity(id, createUserIdentityDto);
  }

  @Post(':id/vehicles')
  createUserVehicle(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserVehicleDto: CreateUserVehicleDto,
  ) {
    return this.userService.createUserVehicle(id, createUserVehicleDto);
  }


}
