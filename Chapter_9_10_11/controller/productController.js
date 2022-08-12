const asyncHandle = require('express-async-handler');
const Product = require('../models/productModel');

// http://localhost:3000/api/products?keyword=sac-iphone&pageNumber=2

const getProducts = asyncHandle(async (req, res) => {
    // Fix số lượng sản phẩm hiển thị trên 1 trang
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword ? { name: { $regex: req.query.keyword }} : {};
    const countProduct = await Product.countDocuments({ ...keyword });
    // giả sử có 20 sản phẩm, đang ở trang số 2, skip qua 10 sản phẩm đầu, chỉ lấy từ sản phẩm số 11 trở đi
    const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1));
    res.json({
        products,
        countProduct,
        page
    });
});

module.exports = {
    getProducts
}