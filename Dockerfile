FROM node:15.14
EXPOSE 3000
WORKDIR /code
COPY . .
ENV NODE_ENV=
RUN npm install
CMD ["npm", "start"]