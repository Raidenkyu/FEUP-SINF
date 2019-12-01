FROM node:dubnium

WORKDIR /app-fe

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

CMD npm start