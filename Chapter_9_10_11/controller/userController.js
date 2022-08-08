// Viết các hàm xử lý logic
// Gọi đến model - để tương tác với database
// Được router gọi đến - để định tuyến người dùng đến controller nào
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

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

const authLogin = asyncHandler(async (req, res) => {
    // Xử lý code logic login
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

const getUserProfile = asyncHandler(async (req, res) => {
   console.log('getUserProfile-function');
   console.log('userInfo2', req.user);
   const user = await User.findById(req.user._id);
   if (user) {
       res.json({
           _id: user._id,
           name: user.name,
           email: user.email,
           isAdmin: user.isAdmin
       })
   } else {
       res.status(401);
       throw new Error('User info not found')
   }
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            // Tại sao không phải hash password ở đây.
            user.password = req.body.password;
        }

        const updateUser = await user.save();
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('User not found');
    }
});

const getAllUser = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

const deleteUserById = asyncHandler(async (req, res) => {
   const user = await User.findById(req.params.id);
   if (user) {
       await user.remove();
       res.json({
           message: 'User removed'
       });
   } else {
       res.status(400);
       throw new Error('User not found');
   }
});

module.exports = {
    registerUser,
    authLogin,
    getUserProfile,
    updateUserProfile,
    getAllUser,
    deleteUserById
}