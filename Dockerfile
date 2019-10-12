FROM node:10

WORKDIR /app
COPY package.json .
RUN ["npm", "install"]
COPY . .
EXPOSE 3000

ARG TEST_VAL=defaultValue

RUN echo "${TEST_VAL}" >> .test

RUN cat .test

ENTRYPOINT [ "node", "index.js" ]