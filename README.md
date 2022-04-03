# t9-converter

## Installation — MacOs

1. Install `node`:

   ```sh
   brew install node
   ```

1. Install `yarn` package manager

   ```sh
   npm install --global yarn
   ```

1. Install docker — https://docs.docker.com/desktop/mac/install/

## Run with Docker

1. Run containers. If you don't have built images yet — they are going to be built automatically.

   ```sh
   docker-compose up -d
   ```

## Run without Docker

1. Run server, it will listen `8000` port:

   ```sh
   cd converter
   yarn dev
   ```

   or

   ```sh
   cd converter
   yarn build && yarn start
   ```

2. Run webapp, it will be available at `localhost:3000`:

   ```sh
   cd webapp
   yarn start
   ```
