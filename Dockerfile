FROM buildkite/puppeteer:latest

WORKDIR /app

RUN apt-get update && apt-get -y install procps
RUN npm config set update-notifier false

COPY package.json .
RUN npm install
