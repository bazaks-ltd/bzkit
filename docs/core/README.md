# Core

This is the application core or the basics required to build the app.

## Folder stucture

- mobile
- admin
- api

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
```