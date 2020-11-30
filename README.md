# aircare

## Requirementes
* golang
* docker-ce

## Build static binary
```
./build.sh
```

## Build docker image
```
sudo docker rmi aircare
sudo docker build -t aircare .
```

## Run docker container
```
sudo docker run --restart=always -p 8000:8000 --name aircare aircare
```
