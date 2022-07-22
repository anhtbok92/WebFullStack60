const express = require('express');
const app = express();

//B1. Tao 1 middleware có nhiệm vụ chặn người dùng không được truy cập vào trang admin
const checkRequestMiddleware = (req, res, next) => {
    // check data, check IP cua user co dc phep truy cap khong
    if (req.url === '/admin') {
        res.send('Ban khong co quyen truy cap vao trang nay');
    } else {
        next();
    }
}

//B2. Sử dụng middleware vừa tạo
app.use(checkRequestMiddleware);

app.get('/', function (req, res) {
    res.send('Truy cap homepage thanh cong');
});

app.get('/shopping-cart', function (req, res) {
    // middlware sẽ được import chỗ này để chạy.
    res.send('Truy cap gio hang thanh cong');
});

app.get('/admin', function (req, res) {
    res.send('Truy cap trang admin thanh cong');
});

app.listen(5000);