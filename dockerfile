FROM node:latest

WORKDIR /user/src/users

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node" ,"dist/src/main.js"]