# Authentication

Almost every apps that involves users makes use of authentication mechanism. Authentication in our context itself is the process of verifying if the user attempting to use our services is whom who he claims to be.

## Business requirement

- Register new users.
- Send confirmation emails.
- Provide secure options for recovering a forgotten password.
- Protect authentication data from unauthorize access.

## Auth ux

![](auth.drawio.svg)

## Technical Requirements

- We should define the User Model
- User should be able to register
- We should find the correct password mechanism from owasp we will be using Argon2id
- email instead of username because reduce load of uniqueness test
- cms to manage and block users

## Api implementation

Lets define our user model:
This is greatly inspired from directus platform. Add the following in `api/prisma/schema.prisma`

```
model User {
    id    Int     @default(autoincrement()) @id
    email String @unique
    first_name String?
    last_name String?
    password String?
}
```

In the `api` folder

```
npx prisma migrate dev --name init
```

```
prisma
├── dev.db
├── migrations
│   └── 20201207100915_init
│       └── migration.sql
└── schema.prisma
```

Install the prisma client

```
pnpm add @prisma/client
```

### Create the User module and service

```
pnpm nest g module users
pnpm nest g service users
```

implement `users.service.ts`

```
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

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

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
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

```

users.module.ts

```
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

```

### Creating the auth module. In the api folder

```
pnpm nest g module auth
pnpm nest g controller auth
pnpm nest g service auth
```

### Relative Links

- https://vertabelo.com/blog/user-authentication-module/
- https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- https://uxmag.com/articles/app-login-design-choosing-the-right-user-login-option-for-your-app
