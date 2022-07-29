const Joi = require('joi');

// Validate when register user
const registerValidation = function (data) {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}

const loginValidation = function (data) {
    const schema = Joi.object({
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;