# Email confirmation

Lets add a confirm field in our user model

```
User {
    ....
    is_email_confirmed Boolean @default(false)
}
```

To confirm email address we will send message containing JWT.

create email module, service and controller

```
pnpm nest g module email
pnpm nest g service email
pnpm nest g controller email
```

## Mailer

Install mailer

```
pnpm add @nestjs-modules/mailer nodemailer
```

Configure Mailer
