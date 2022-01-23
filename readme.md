# Cocus Challenge GitHub API

## Description

This is an API that will be used as a technical challenge at Cocus company admission process.
It's able to receive an user at the request and return all no forked repositories with its respective branch names and last commit sha hashkey.

## Stack

* NodeJs 14.16.0
* Typescript 4.5.5
* Express 4.17.2

## Tests

* Jest 27.4.7
* Supertest 6.2.2

## How to install and use this API

1 - Running using Node at your machine

* Create a .env file with GITHUB_TOKEN variable passing your auth token as value
* Run `npm install`
* Run `npm run dev`
* *POST* http://localhost:3000/user/repositories a JSON body contaning `user: string`
* Also you can access http://localhost:3000/user/api-docs endpoint to access swagger documentation

2 - Running using docker

* Create a .env file with GITHUB_TOKEN variable passing your auth token as value
* Run `docker-compose up` or `docker build .` then `docker run {image}`
* *POST* http://localhost:3000/user/repositories a JSON body contaning `user: string`
* Also you can access http://localhost:3000/user/api-docs endpoint to access swagger documentation

## Author

Lucas Pereira e Silva

@lucaspsilva90

