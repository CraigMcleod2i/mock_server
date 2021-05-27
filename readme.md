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
* A host flag is required in the start script, but this can be passed at run time to avoid duplicate builds
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

## To build for a run on raspberry pi
*   The image needs to be built for multiplatforms, the command will look something like this depending on the platform build you require
```
docker buildx build --platform linux/arm/v7 -t <your_image> .
```
## Running on the Raspberry Pi and accessing it on the same network
* The server can now be run on the Pi and accessed locally or via a device on the same network by binding the host IP of the Pi with the container IP
```
docker run -p 3000:3000 -h <Pi IP>:<container IP> --env NODE_ENV=<container IP> cmcleod85/server_image
```
* Access the server by navigating to the Pi IP address and bound port number i.e. 192.168.1.169:3000 **NOTE** Ignore the link in the terminal output, this will not take you to the server endpoint