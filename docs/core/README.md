# Core

This is the application core or the basics required to build the app.

## Folder stucture

- mobile
- admin
- api
- mail

### Mobile

For the mobile application we will be using Nativescript https://nativescript.org/ but vue3
which is still in beta

```
ns create mobile --template @nativescript-vue/template-blank@beta

cd mobile
```

This template already has tailwind css https://tailwindcss.com/ included inside of it so no need to install it.

Since we will be using pnpm

```
ns package-manager set npm
```

Double check

```
ns package-manager get
```

Run project

```
ns run ios|android
```

### admin

For the admin we will be building a custom one with Nuxt vue3

```
pnpm dlx nuxi@latest init admin

cd admin

pnpm dev
```

### api

For the api or backend we will be using Nest with prisma recipe

```
npm i -g @nestjs/cli
nest new api

cd api
pnpm add -D prisma
npx prisma init
```

We will be doing local testing so we will be using sqlite database so in the api/.env file

```
DATABASE_URL="file:./dev.db"
```

And in the schema.prisma

```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

### mail

For the mailing serivce we setup a temporary smtp server in node using haraka.

To run the server

```
cd mail
pnpm install
pnpm mail:run
```

Install Swaks
https://jetmore.org/john/code/swaks/

To test the sending of the mail change the script in package.json **mail:test**
