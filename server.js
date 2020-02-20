const express = require('express');
const helmet = require('helmet');

const  RecipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/recipes', RecipesRouter );
server.get('/', (req, res) => {
    res.send('<h1> Its Nice, I like, How Much <h1>')
})

module.exports = server;