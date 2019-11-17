const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

const accountRouter = require('./resources/accounts/accountRouter');

server.use(express.json());

server.use('/accounts', accountRouter);

module.exports = server;