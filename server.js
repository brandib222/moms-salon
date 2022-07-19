const express = require('express');
const server = express();

const accountsRouter = require('./api/accounts/accounts-router');

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Get this info</h2>`)
})

module.exports = server;


