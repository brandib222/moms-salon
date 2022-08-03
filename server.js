const express = require('express');
const server = express();

const { router } = require('./api/accounts/accounts-router');
const cors = require('cors');


server.use(express.json());
server.use(
    cors({
        origin:['http://localhost:5000']
    })
)

server.use('/api/accounts', router);

server.get('/', (req, res) => {
    res.send(`<h2>Get this info</h2>`)
});

server.listen(9000, function(err) {
    err
        ? console.log('Server listening on PORT', 9000)
        : console.log('server running...');
});

module.exports = server;


