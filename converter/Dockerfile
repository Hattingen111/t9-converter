FROM node:14.19.1 as builder

WORKDIR /build

COPY . .

RUN yarn
RUN yarn build

FROM node:14.19.1

WORKDIR /app

COPY --from=builder ./build/bin .
COPY --from=builder ./build/node_modules ./node_modules

ENTRYPOINT ["node", "index.js"]

EXPOSE 8000
