var express = require('express');
const {
  registerValidation,
  loginValidation
} = require("../validation/validate");
var router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyUserMiddleware = require('../middleware/authMiddleware');


// 1. Viết 1 API đăng ký người dùng
// - Kiểm tra email đã tồn tại trong hệ thống chưa?
// - Mã hóa password
// - Tạo new user
router.post('/register', async function (req, res) {
  // Validate user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Kiểm tra email có tồn tại trong hệ thống hay chưa?
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email exists in database. Please choose other email');

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Tao user
  const newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = hashPassword

  try {
    const user = await newUser.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// 2. Viết 1 API login vào hệ thống
// - Kiểm tra email có đúng không (có thật là member của hệ thống hay không)
// - Kiểm tra password đúng không ?
// - Generate ra chuỗi token (dựa trên secret string - chuỗi bí mật)
router.post('/login', async function (req, res) {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Kiểm tra email có đúng không (có thật là member của hệ thống hay không)
  const userLogin = await User.findOne({ email: req.body.email });
  if (!userLogin) return res.status(400).send("User not exist in database");

  // Kiểm tra xem password user login gửi lên có đúng không ?
  const passLogin = await bcrypt.compare(req.body.password, userLogin.password);
  if (!passLogin) return res.status(400).send("Password incorrect");

  // Generate ra chuỗi token
  const token = jwt.sign({_id: userLogin._id}, 'chuoibimatkhongduoctietlo');
  res.header('auth-token', token).send(token);
});


// 3. Viết 1 API - trả về 1 string HelloWord
// - Nếu API này gắn chuỗi token được generate từ bước 2, thì trả về HelloWorld
// - Nếu API này gắn chuỗi token fake, thì trả về không có quyền truy cập
// - Nếu API không gắn token, thì trả về không thể truy cập
// Tạo ra 1 hàm dùng để check 3 gạch đầu dòng ở trên - middleware
router.get('/', verifyUserMiddleware, function (req, res) {
  res.send('HelloWorld');
});

module.exports = router;

