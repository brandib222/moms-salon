const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Accounts = require('./accounts-model');
const tokenMaker = require('./token-builder');
const { BCRYPT_ROUNDS } = require('./../config');

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

router.post('/register', async (req, res, next) => {
        let user = req.body;

        const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS);

        user.password = hash;

        try {
            const newUser = await Accounts.add(user);
            res.status(200).json({message:'account successfully created, please login', newUser: {...newUser}});
        } catch (err) {
            next(err);
        }
    }
)

router.post('/login', (req, res, next) => {
    const user = req.userFromDb;
    res.status(200).json({message:`Welcome ${user.name}`, token:tokenMaker(user)});
}
)

module.exports = {
    router,
  };
  
  
// need to write out remove and update accounts