# ToDo API using Node, Express, Sequelize and PostgreSQL

## Project Setup 

Usual set up where we npm init our project folder. This can be named whatever you want. 


## Express Setup 

Run the command 

`npm i --save express body-parser morgan`

Created app.js where we created the general configs to get a server running. Also added our start script with nodemon.

## Sequelize Setup

Installed Sequelize globally on the machine using 

`npm i -g sequelize-cli`

Added a .sequelizerc file --> This is to specify the paths to files required by Sequelize. 

Now to install sequelize into our project. 

`npm i --save sequelize pg pg-hstore`

pg is responsible for creating the database connection, while pg-hstore is a module for serializing and deserialzing JSON data into the Postgres hstore format. 

After that we ran the init command. `sequelize init` - this should generate our models, config, migrations and seeder folders. 

In the config file, created a username and password. Also included `operatorAliases: false` to turn of deprecation message. 

Now, we can create our database!

In terminal ran the following command 

`createdb todos-dev`

Awesome, we just created our first database!

## Generating Models 

We are going to have 2 models, Todo and TodoItem. The relationship between Todo and TodoItem is going to be one-to-many, so a Todo can have many TodoItems while a TodoItem can only belong to one Todo. 

To create the Todo model run the following command 

`sequelize model:create --name Todo --attributes title:string`

To create the TodoItems model run the following command 

`sequelize model:create --name TodoItem --attributes content:string, complete:boolean`

Make sure to make the relationship between the two models. Potentially can go todo:references

Then run `sequelize db:migrate`

## Installing

Please clone the repo and then run `npm install` and then `npm run start` to play around with the API

Happy Hacking!
