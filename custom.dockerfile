FROM node:8

ENV NODE_ENV=development
ENV PORT=3000

MAINTAINER Janne Huotari

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm","start"]