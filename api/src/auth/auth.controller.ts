import { Body, Controller, Post } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async registerUser(
    @Body()
    userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Post('login')
  async loginUser(
    @Body()
    userData: CreateUserDto,
  ): Promise<String> {
    return 'cool';
    // return this.userService.createUser(userData);
  }
}
