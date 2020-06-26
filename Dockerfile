FROM buildkite/puppeteer:v3.0.4

WORKDIR /app

RUN apt-get update && apt-get -y install procps

COPY package.json .
RUN npm install

COPY . .
