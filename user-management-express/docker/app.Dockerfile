FROM node:22.16.0-alpine3.21

ENV HOME=/home/app

RUN mkdir -p $HOME
WORKDIR $HOME/

EXPOSE 8080

CMD [ "npm", "run", "start" ]
