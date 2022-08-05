// Viết các hàm xử lý logic
// Gọi đến model - để tương tác với database
// Được router gọi đến - để định tuyến người dùng đến controller nào
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // 1. check user exists in database
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // save to database
    const newUser = await User.create({ name, email, password });
    if (newUser) {
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
})

module.exports = {
    registerUser
}