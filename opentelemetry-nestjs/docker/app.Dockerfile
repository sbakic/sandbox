FROM node:18.19.1-alpine3.19

ENV HOME=/home/app

RUN mkdir -p $HOME
WORKDIR $HOME/

EXPOSE 8080

CMD [ "npm", "run", "start" ]
