
## Description

Basic CRUD app using [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## CRUD
Used [Nextjs CRUD](https://github.com/nestjsx/crud) to automate basic crud endpoints.
Database config is stored in ormconfig.json file.

### Endpoints Available
GET /teams - Get all teams
GET /teams/:team_id - Get one team by id
POST /teams - Add a team
POST /teams/bulk - Add many teams
PUT /team/:team_id - Replace team team_id
PATCH /teams/:team_id - Update team team_id
