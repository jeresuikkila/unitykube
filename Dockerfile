FROM node:10

WORKDIR /app
COPY package.json .
RUN ["npm", "install"]
COPY . .
EXPOSE 3000

ARG SERVICE_NAME
ENV SERVICE_NAME=$SERVICE_NAME

ENTRYPOINT [ "node", "index.js" ]