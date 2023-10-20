import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
import { PasetoService } from 'src/paseto/paseto.service';

@Module({
  controllers: [AuthController],
  providers: [PrismaService, UsersService, PasetoService],
})
export class AuthModule {}
