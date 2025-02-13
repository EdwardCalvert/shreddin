FROM node:23-alpine

ARG PORT=3000

WORKDIR /app

COPY package.json .

RUN npm install && npm i -g serve

COPY . .

RUN npm run build

EXPOSE $PORT

CMD ["sh", "-c", "serve -s dist -l $PORT"]