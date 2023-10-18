import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PasetoController } from './paseto/paseto.controller';
import { PasetoService } from './paseto/paseto.service';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    EmailModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }),
  ],
  controllers: [AppController, PasetoController],
  providers: [AppService, PasetoService],
})
export class AppModule {}
