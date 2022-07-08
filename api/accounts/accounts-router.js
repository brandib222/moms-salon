const express = require('express');

const Accounts = require('./accounts-model');


const router = express.Router();

router.get('/:email', (req, res, next) => {
    res.status(200).json(req.account)
});

router.post('/', (req, res) => {
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

// need to write out remove and update accounts