FROM node:14.19.1 as builder

WORKDIR /build

COPY . .

RUN yarn
RUN yarn build

FROM nginx:1.16.0-alpine

COPY --from=builder /build/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
