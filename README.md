# t9-converter

This solution uses built-in array of English words (fastest + free solution). It could have used any external API (like https://www.wordsapi.com/) or built-in words database.

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

1. Build project and run:

   ```sh
   yarn build && yarn start
   ```
