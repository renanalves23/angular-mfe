FROM node:18-alpine

WORKDIR /app

COPY . .

RUN apk add --no-cache curl \
  && npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
