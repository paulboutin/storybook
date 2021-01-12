FROM buildkite/puppeteer:5.2.1

WORKDIR /app

RUN apt-get update && apt-get -y install procps
RUN npm config set update-notifier false

COPY package.json .
RUN npm install
