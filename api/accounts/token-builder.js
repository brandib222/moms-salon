const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('./../config');

module.exports = function makeToken(user) {
    const payload = {
        name:user.name,
        email:user.email,
        city:user.city
    }
    const options = {
        expiresIn:'1d'
    }
    return jwt.sign(payload, TOKEN_SECRET, options)
}
