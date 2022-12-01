# Bridger Ski Foundation Volunteer Tracking Application

CSCI 331 final project at Montana State University

# Getting started
To setup your development environment, create a .env file in both the project root and in inside the client directory. (see each respective .env.sample file for easier setup).

 - **NOTE**: You must have an SQL database setup. Once setup, create respective databases and tables or visit the `server/sql` directory

# Scripts available inside this app

- `npm run server` starts the server in development mode.

- `npm run client` starts the frontend of the applicaiton without the backend, unless started seperatly.

- `npm run dev` the **recomended** way of starting the application. This will run both the backend and frontend concurrently.

- `npm run docs` generates the documentation in HTML for the application. Once complete, it will create a new `docs` directory in the root of the application.