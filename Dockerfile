FROM node:22.1.0
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm", "run", "serve" ]
EXPOSE 8080