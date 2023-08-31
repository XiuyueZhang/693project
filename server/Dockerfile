FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /server

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 5050

CMD ["node", "index.js"]
