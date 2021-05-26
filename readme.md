# Running a json-server from a docker image
## Docker file
* Set up docker file as normal, but include **EXPOSE <`port`>** e.g EXPOSE 3000
## package.json
* A host flag is required in the start script. To get the IP address of the host you will first need to build the image
* Once the image is built, in the command line run
```
    docker ps
```
* Get the container ID for the relevant image
* In the command line run
``` 
docker inspect <container ID>
```
* Note the IP address from the response
* Now add the --host flag and IP address to the package.json start script
```
"start": "json-server --watch server.js --host 172.17.0.2"
```

## Rebuild and run
* Build the image again as usual
* Run the image with the port that was exposed in the dockerfile
```
docker run -p 3000:3000  mock_server 
```
* Access the server from http://localhost:<`exposed_port_number`>