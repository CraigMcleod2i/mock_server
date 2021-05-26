# Running a json-server from a docker image
## Docker file
* Set up docker file as normal, but include **EXPOSE <`port`>** and **`ENV NODE_ENV=`**
* e.g
```
FROM node:15.14
EXPOSE 3000
WORKDIR /code
COPY . .
ENV NODE_ENV=
RUN npm install
CMD ["npm", "start"]
```

## package.json
* A host flag is required in the start script, but, this can be passed at run time to avoid duplicate builds
* Add the flag and variable to the package.json
```
"start": "json-server --watch server.js --host ${NODE_ENV}"
```
* Build the image as normal
* Once the image is built, in the command line run
```
    docker run <your_image>
```
/// Some work is required here to get the IP address more easily
* In a new command line
```
    docker ps
```
* Get the container ID for the relevant image

* In the command line run

``` 
docker inspect <container ID>
```
* Note the IP address from the response

* Stop that container

## Run the image
* Run the image with the port that was exposed in the dockerfile and pass in the IP address to the NODE_ENV variable
```
docker run -p 3000:3000 --env NODE_ENV=172.17.0.2  mock_server 
```
* Access the server from http://localhost:<`exposed_port_number`>