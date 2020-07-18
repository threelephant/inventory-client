FROM debian:10.4

WORKDIR /inventory-client

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs

RUN npm install -g -s serve

COPY . .

RUN npm install -s
RUN npm run -s build

EXPOSE 5000

ENTRYPOINT serve -s build