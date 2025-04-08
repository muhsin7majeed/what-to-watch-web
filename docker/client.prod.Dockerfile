FROM node:20 AS builder

WORKDIR /app

COPY client/package*.json ./

RUN npm install

COPY client ./

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80