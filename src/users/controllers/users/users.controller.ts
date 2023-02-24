import { Body, Controller, Get,Post} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';


@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

}
