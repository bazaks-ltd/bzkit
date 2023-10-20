import { Body, Controller, Header, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto, LoginUserDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  @Header('Content-Type', 'application/json')
  async registerUser(
    @Body()
    userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Post('login')
  @Header('Content-Type', 'application/json')
  async loginUser(
    @Body()
    userData: LoginUserDto,
  ): Promise<Object> {
    return this.userService.validateUser(userData);
  }
}
