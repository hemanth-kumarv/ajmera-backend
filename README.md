# User management backend

Backend to serve User Management Frontend (https://github.com/hemanth-kumarv/user-management-frontend) which connects to MongoDB database (served locally) through Mongoose ODM.

## Features

- Add new user
- Read users list from database
- Connection to database through Mongoose ODM

## Demo

Here is a working live demo : https://github.com/hemanth-kumarv/user-management-backend

### Schema

![](/screenshots/schema.png)

## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.
Once the dependencies are installed, you need to run `npm run start` to start the server. You might want to look into `index.js` to change the port.

Start a MongoDB server locally at port `:27017`, or connect to a cloud database in `config/mongooseConnection.js`.

## Usage

Once the dependencies are installed, you need to run `npm run start` to start the server.
You will then be able to access it at `localhost:3001`

## APIs

- `GET /api/v1/user` - read users list from database
- `POST /api/v1/user` - add new user to database

## To-do

- API input validation
- Handle image uploads for add user
- Better error handling
- More functionalities/features
