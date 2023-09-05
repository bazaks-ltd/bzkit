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

Create the registration endpoint in auth.controller.ts

```
import { Body, Controller, Post } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post('user')
  async registerUser(
    @Body()
    userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}

```

Install validation

```
pnpm add class-validator class-transformer
```

- ref: https://docs.nestjs.com/techniques/validation

Install prisma exceptions `prisma-client-exception.filter.ts`

- https://github.com/notiz-dev/nestjs-prisma/blob/main/lib/prisma-client-exception.filter.ts

```
import {
  ArgumentsHost,
  Catch,
  ContextType,
  HttpException,
  HttpServer,
  HttpStatus,
} from '@nestjs/common';
import { APP_FILTER, BaseExceptionFilter, HttpAdapterHost } from '@nestjs/core';
import { Prisma } from '@prisma/client';

export declare type GqlContextType = 'graphql' | ContextType;

export type ErrorCodesStatusMapping = {
  [key: string]: number;
};

/**
 * {@link PrismaClientExceptionFilter} catches {@link Prisma.PrismaClientKnownRequestError} exceptions.
 */
@Catch(Prisma?.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  /**
   * default error codes mapping
   *
   * Error codes definition for Prisma Client (Query Engine)
   * @see https://www.prisma.io/docs/reference/api-reference/error-reference#prisma-client-query-engine
   */
  private errorCodesStatusMapping: ErrorCodesStatusMapping = {
    P2000: HttpStatus.BAD_REQUEST,
    P2002: HttpStatus.CONFLICT,
    P2025: HttpStatus.NOT_FOUND,
  };

  /**
   * @param applicationRef
   * @param errorCodesStatusMapping
   */
  constructor(
    applicationRef?: HttpServer,
    errorCodesStatusMapping: ErrorCodesStatusMapping | null = null,
  ) {
    super(applicationRef);

    // use custom error codes mapping (overwrite)
    //
    // @example:
    //
    //   const { httpAdapter } = app.get(HttpAdapterHost);
    //   app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter, {
    //     P2022: HttpStatus.BAD_REQUEST,
    //   }));
    //
    if (errorCodesStatusMapping) {
      this.errorCodesStatusMapping = Object.assign(
        this.errorCodesStatusMapping,
        errorCodesStatusMapping,
      );
    }
  }

  /**
   * @param exception
   * @param host
   * @returns
   */
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    return this.catchClientKnownRequestError(exception, host);
  }

  private catchClientKnownRequestError(
    exception: Prisma.PrismaClientKnownRequestError,
    host: ArgumentsHost,
  ) {
    const statusCode = this.errorCodesStatusMapping[exception.code];
    const message =
      `[${exception.code}]: ` + this.exceptionShortMessage(exception.message);

    if (host.getType() === 'http') {
      if (!Object.keys(this.errorCodesStatusMapping).includes(exception.code)) {
        return super.catch(exception, host);
      }

      return super.catch(
        new HttpException({ statusCode, message }, statusCode),
        host,
      );
    } else if (host.getType<GqlContextType>() === 'graphql') {
      // for graphql requests
      if (!Object.keys(this.errorCodesStatusMapping).includes(exception.code)) {
        return exception;
      }

      return new HttpException({ statusCode, message }, statusCode);
    }
  }

  private exceptionShortMessage(message: string): string {
    const shortMessage = message.substring(message.indexOf('→'));
    return shortMessage
      .substring(shortMessage.indexOf('\n'))
      .replace(/\n/g, '')
      .trim();
  }
}

export function providePrismaClientExceptionFilter(
  errorCodesStatusMapping?: ErrorCodesStatusMapping,
) {
  return {
    provide: APP_FILTER,
    useFactory: ({ httpAdapter }: HttpAdapterHost) => {
      return new PrismaClientExceptionFilter(
        httpAdapter,
        errorCodesStatusMapping,
      );
    },
    inject: [HttpAdapterHost],
  };
}
```

Using argon2 password hash

```
pnpm add argon2
```

### Relative Links

- https://vertabelo.com/blog/user-authentication-module/
- https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- https://uxmag.com/articles/app-login-design-choosing-the-right-user-login-option-for-your-app
