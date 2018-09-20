# Exam 1 Web Development - Subject: 

## Description
Description Here

## Motivation
This is part of the first exam of Web Development in the University of Los Andes to encourage students the use of technologies including APIs through the develop of usefull sollutions 

## Installation
Install NodeJS with ReactJS and ExpressJS packages

Install npm or yarn depending what you prefer

Install MongoDB (for cmd) and MongoDB Compass (Optional), MongoDB Compass allows to see structured data

## Deployment
Once downloaded, get in the root folder of the App and install all dependencies using

Advice: Use npm or yarn, not both

Go to the server folder

`
cd [User Root]/parcialweb/
`

Install backend dependencies

`
npm install / yarn install
`

Then run the following command

`
npm start / yarn start
`

Go to the client folder

`
cd [User Root]/parcialweb/cliente
`

Install frontend dependencies

`
npm install / yarn install
`

Then run the following command

`
npm start / yarn start
`

Troubles with data?

You can import a local file or setup a Mongo database

Prepare the data by running the following commands

`
cd [User Root]/parcialweb/data/
`

Local File:
Import the information in the json format available in data folder

`
mongoimport -d files -c objects --jsonArray --file files.json
`

Setup a Mongo database
Create a .env file and set
* ```MONGODB_URI=<mongo_db_url>```
* ```DB_NAME=lostNFound```

## Technologies used
For the development of the page, the technologies used were:
- HTML
- JS
- CSS
- Nodejs
- Express
- MongoDB
- React
- Reactstrap
- Heroku
- Vega-Lite
- Venga-Embed

## Screenshot 
Here is a small view of the project developed

Image Here

## Author
* [__Daniel Cagua Ennis__](https://github.com/dcagua10)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository has the standard MIT license. You can find it in the code
