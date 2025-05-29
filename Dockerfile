FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install bcrypt && npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
