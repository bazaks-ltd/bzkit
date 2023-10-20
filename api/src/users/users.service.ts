import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import * as argon2 from 'argon2';
import { LoginUserDto } from './users.dto';
import { PasetoService } from 'src/paseto/paseto.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private paseto: PasetoService,
  ) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async createUser(_data: Prisma.UserCreateInput): Promise<User> {
    let data = { ..._data };
    data['password'] = await argon2.hash(_data.password);
    return this.prisma.user
      .create({
        data,
      })
      .then((value) => {
        delete value.password;
        return value;
      });
  }

  async validateUser(data: LoginUserDto): Promise<Object> {
    const { password, email } = data;
    const result = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const payload = {
      sub: result.id,
      email: result.email,
    };

    if (!(await argon2.verify(result.password, password))) {
      throw new UnauthorizedException();
    }

    const ptoken = await this.paseto.sign(payload);
    return {
      access_token: ptoken,
    };
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
