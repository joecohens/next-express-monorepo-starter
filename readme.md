# NextJS, Express and Now as Microservices with Yarn & Lerna Workspaces

This is a starter/example repo for creating websites with NextJS and API with Express on a monorepo, with yarn & lerna.

## How to use

WEB   (NextJS)      will be running on http://localhost:3000
API   (Express)     will be running on http://localhost:3001
PROXY (Micro Proxy) will be running on http://localhost:9000

### Web

The web will be available on it's own http://localhost:3000 and also will be mapped to be the default http://localhost:9000/. The source code it's on packages/web and it can be deployed by it self.

### API

The api will be available on it's own http://localhost:3001 and also will be mapped to http://localhost:9000/api on the proxy server so you can consume it easily from the website, the source code it's on packages/api and it can be deployed by it self.

## How to install

Clone the repo.

```
git clone https://github.com/joecohens/next-express-monorepo-starter {project-name}

cd {project-name}
```

Copy the env files for each service.

```
cp packages/api/.env.example packages/api/.env
cp packages/web/.env.example packages/web/.env
```

Install dependencies only on the root thanks to yarn workspaces.

```
yarn install
```

## Development

Run the dev server from the root project.

```
yarn dev
```

You can run each service individually.

```
yarn dev:web
yarn dev:api
```

For more info look a the `package.json` scripts.

## Deploy

You can easily deploy each microservice using now and use alias paths to route exactly like micro-proxy, so you'll have the same production env.

I'll will add an example and scripts soon.
