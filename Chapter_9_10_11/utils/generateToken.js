const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, 'masobimat123', {
        expiresIn: '1d'
    });
}

module.exports = generateToken;