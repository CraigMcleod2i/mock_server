FROM node:15.14

EXPOSE 3000
WORKDIR /code

COPY . .
RUN npm install


CMD ["npm", "start"]