FROM node:18.19.1-alpine3.19

ENV HOME=/usr/build

RUN mkdir -p $HOME && mkdir -p $HOME/node_modules
WORKDIR $HOME/

ADD ./build $HOME/
ADD ./package.json $HOME/
ADD ./package-lock.json $HOME/
ADD ./entrypoint.sh /usr/build/

RUN npm ci --only=production

EXPOSE 8080

ENTRYPOINT [ "./entrypoint.sh" ]
