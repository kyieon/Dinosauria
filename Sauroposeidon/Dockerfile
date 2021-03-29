FROM node:14-alpine
WORKDIR /app
COPY package.json ./
RUN npm install -g pm2
RUN pm2 install ts-node
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]
EXPOSE 4000