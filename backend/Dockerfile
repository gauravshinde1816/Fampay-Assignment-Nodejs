FROM ubuntu

RUN  apt update && \
    apt install -y nodejs && \
    apt install -y npm
  
WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . ./

EXPOSE 5000

CMD [ "node" , "server.js"]