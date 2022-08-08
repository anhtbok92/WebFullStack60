const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// 1. Kiểm tra xem token có hợp lệ hay không
// Có gửi token lên hay không
const protect = asyncHandler(async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization && authorization.startsWith('Bearer')) {
        // Check tiếp xem token có thực sự hợp lệ hay không
        try {
            // Bearer abcdddf.xdffdt.xfcdfd -> ['Bearer', 'abcdddf.xdffdt.xfcdfd'];
            const token = req.headers.authorization.split(' ')[1];
            const userVerify = jwt.verify(token, 'masobimat123');
            console.log('userVerify', userVerify);
            const userInfo = await User.findById(userVerify.id).select('-password');
            console.log('userInfo', userInfo);
            req.user = userInfo;
            // req.user = await User.findById(userVerify.id).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('token invalid');
        }
    } else {
        res.status(401);
        throw new Error('Not authorization or no token or token invalid');
    }
});

// 2. Kiểm tra user đang gửi lên token có phải là admin hay không ?
const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin');
    }
}
module.exports = {
    protect,
    isAdmin
}