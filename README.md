# SNIF
The project developed in SINF course from the Integrated Masters in Informatics Engeneering and Computation.

Made by:
* Antero Santos
* Diogo Yaguas
* Duarte Oliveira
* Fernando Alves
* João Carlos Maduro

## Pre-requisites

* Install NodeJS 
* Install [NVM](https://github.com/nvm-sh/nvm)
* Change node version
    - `nvm install 10.16.0`
    - `nvm use 10.16.0`
* Install [NPM](https://www.npmjs.com/get-npm)

Note: if you get the following error:
```
nvm: command not found
```
check this [link](https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found)

## Usage

### Build the app
Build the containers:
```
docker-compose build
```

Build the back-end:
```
cd snif-be
npm install
```

Build the front-end:
```
cd snif-fe
npm install
```

### How to run
```
docker-compose up
```
This will create a development server with hot reloading which will listen on `http://localhost:3000`.

### Restarting the backend
The backend often requires restarting with significant changes. To do this, run the following command:
```
docker-compose restart express-app
```
