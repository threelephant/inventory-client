# Система инвентаризации (Frontend)

**Внимание! Программа находится в стадии разработки. Запускайте на свой страх и риск!**

**Warning! The program is under development. Run at your own risk!**

## Ссылки

- [**Backend**](https://github.com/RuslanMac/Inventory1)
- [**Документация API**](https://gist.github.com/threelephant/ca48ade9ed49a3749c80d587e7ef3a31)

## Требуемые программы для установки

- [**Node.js**](https://nodejs.org/en/download/current/) [**(>14.3)**](https://nodejs.org/download/release/v14.3.0/)

Для Linux (Debian-based)
```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Установка

### Для режима разработки

```sh
git clone https://github.com/threelephant/inventory-client
npm install --dev
npm start
```

#### Мокап данных

Для мокапа данныx используется библиотека [**json-server**](https://www.npmjs.com/package/json-server)

```sh
npm run server
```

### Для развертывания
Для развертывания необходим инструмент для обслуживания
SPA-приложений - [**serve**](https://www.npmjs.com/package/serve)

```sh
git clone https://github.com/threelephant/inventory-client
npm install
npm install -g -s serve
npm run -s build
serve -s build
```

#### Разверывание с помощью [**Docker**](https://www.docker.com/)

```sh
docker build -t inventory-client .
docker run -d -p <insert-host-port>:5000 inventory-client
```