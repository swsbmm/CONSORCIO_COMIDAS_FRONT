FROM node:lts-bullseye as build

WORKDIR /app

COPY package*.json .

RUN yarn install --production=true

COPY . .

RUN yarn run build

## Stage 2

FROM nginx:alpine

COPY ./config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /var/www/app/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]