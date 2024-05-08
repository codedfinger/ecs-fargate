FROM node:8-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm i --quiet

COPY . .

CMD ["npm", "start"]