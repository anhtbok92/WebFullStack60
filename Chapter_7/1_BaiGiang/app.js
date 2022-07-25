const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3333;

// Import routes
const indexUser = require("./routes/index")

// Gửi yêu cầu phân tích kiểu nội dung application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Gửi yêu cầu phân tích kiểu nội dung application/json
app.use(bodyParser.json())

// Route middlewares
app.use('/api/user', indexUser)

// Lắng nghe các requests
app.listen(port, function(){
    console.log("Server listening port", +port)
})