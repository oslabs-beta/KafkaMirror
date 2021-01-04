FROM node:12.16.3
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm","run","dev"]