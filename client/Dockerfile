FROM node:18-alpine

# copy the app, note .dockerignore
COPY . /usr/src/new-frontend/

COPY package*.json ./

RUN npm install

COPY . .

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

