Реализация простового бэкенда на nest.js для тестового по фронту (Next.js + FSD + RTK-Query)

## TodoApp

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## API Reference

```json
[
  { "route": { "path": "/todos/", "method": "post" } },
  { "route": { "path": "/todos/", "method": "get" } },
  { "route": { "path": "/todos/:id", "method": "get" } },
  { "route": { "path": "/todos/:id", "method": "patch" } },
  { "route": { "path": "/todos/:id", "method": "delete" } },
  { "route": { "path": "/", "method": "get" } },
  { "route": { "path": "/profile", "method": "get" } },
  { "route": { "path": "/todos", "method": "post" } },
  { "route": { "path": "/todos", "method": "get" } },
  { "route": { "path": "/todos/:id", "method": "get" } },
  { "route": { "path": "/todos/:id", "method": "patch" } },
  { "route": { "path": "/todos/:id", "method": "delete" } },
  { "route": { "path": "/auth/login", "method": "post" } }
]

```