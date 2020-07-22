FROM node:14.5-alpine

WORKDIR /inventory-client

RUN npm install -g -s serve

COPY . .

RUN npm install -s
RUN npm run -s build

EXPOSE 5000

ENTRYPOINT serve -s build