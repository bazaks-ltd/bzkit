import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { PasetoService } from 'src/paseto/paseto.service';

@Module({
  providers: [UsersService, PrismaService, PasetoService],
  exports: [UsersService],
})
export class UsersModule {}
