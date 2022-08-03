const express = require('express');

const Accounts = require('./accounts-model');


const router = express.Router();

router.get('/', (req, res, next) => {
    Accounts.get()
    .then(accounts => {
        res.json(accounts)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Accounts.add(req.body)
        .then(account => {
            res.status(201).json(account);
        })
        .catch(error => {
            res.status(500).json({
                message:'error adding account',
            });
        });
});

module.exports = {
    router,
  };
  
  
// need to write out remove and update accounts