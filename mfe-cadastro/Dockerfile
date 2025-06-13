FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4201

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4201"]
