const productArr = [];
for (let i = 1; i <= 100; i++) {
    const productObject = {
        name: `San pham so ${i}`,
        image: `https://kyma.vn/StoreData/images/Product/may-anh-canon-powershot-g7-x-mark-ii(1).webp`,
        description: `${i} là một chiếc máy ảnh compact nhỏ gọn nhưng có hiệu năng cao. Máy ảnh có khả năng tạo ra chất lượng video tuyệt vời và những bức ảnh tuyệt vời chỉ trong một thiết kế nhỏ gọn.`,
        brand: 'Cannon',
        category: 'Electronics',
        price: 930.00,
        countInStock: 10,
        rating: 0,
        numberReviews: 0
    }
    productArr.push(productObject);
}

module.exports = productArr;