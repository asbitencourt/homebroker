FROM node:20-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /home/node/app1

USER node

CMD [ "tail", "-f", "/dev/null" ]