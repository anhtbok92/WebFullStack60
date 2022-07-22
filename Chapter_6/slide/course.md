### Compare sql and nosql
https://niithanoi.edu.vn/sql-vs-nosql.html

### Mongodb là gì ?
- Mongodb là hệ quản trị cơ sở dữ liệu mã nguồn mở, quản lý dữ liệu dạng NOSQL
- NoSQl là : None-Relational SQL.
- Mạnh mẽ hơn hệ quản trị cơ sở dữ liệu quan hệ về : tốc độ, tính năng, khả năng mở rộng...
- NoSQl bỏ qua tính toàn vẹn của dữ liệu để đổi lấy hiệu suất và khả năng scale

### Tại sao lại chọn mongodb
- Mongodb rất phổ biến - cộng đồng đông đảo
- Nhiều công ty lớn sử dụng : eBay, Orange...

### Kiến trúc của mongodb
- Mongodb là NoSQL
- Thông tin được lưu trữ trong document kiểu JSON thay vì dạng bảng như CSDL quan hệ
- Trong mongodb có khái niệm `collection` (`document`) <---> `table` (`record`)

### Cài đặt
- windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
- Cài đặt Robo3T

### API tra cứu mongoose

https://mongoosejs.com/docs/api/model.html

### Sử dụng mongodb
- Mongosee là 1 thư viện Object Data Modeling <ODM> hỗ trợ làm cầu nối giữa Nodejs với mongodb
- Cài đặt : ```npm install mongosee```
- Kết nối với Mongodb từ Node.js

- Trong file index.js
```angular2html
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
```

- Định nghĩa Model -  BlogPost.js

```angular2html
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
 title: String,
 body: String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost

```

### CRUD với Mongoose model

- Tạo file test.js
- Insert 1 documents <1 record>:

```angular2html
const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true });

BlogPost.create({
     title: 'Đây là sách dạy học lập trình Node.js',
     body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
}, (error, blogpost) => {
     console.log(error, blogpost)
})

```

- Lấy dữ liệu từ MongoDB

```angular2html
// Lấy tất cả document
BlogPost.find({}, (error, blogspot) => {
    console.log(error, blogspot)
})

// Lọc theo điều kiện
BlogPost.find({
    title: 'Đây là sách dạy học lập trình Node.js'
}, (error, blogspot) => {
    console.log(error, blogspot)
})

// tìm tất cả những document mà trong title có từ "Node.js"
BlogPost.find({
    title: 'Node.js'
}, (error, blogspot) => {
    console.log(error, blogspot)
})

- Tham khảo các cách filter khác:
https://docs.mongodb.com/manual/tutorial/query-documents/
```

- Update 1 documents

```angular2html
// chúng ta sử dụng hàm findByIdAndUpdate(...)
// ID là tham số đầu tiên để xác định bản ghi cần cập nhật.

var id = "5cb436980b33147489eadfbb";
BlogPost.findByIdAndUpdate(id, {
    title: 'Updated title'
}, (error, blogspot) => {
    console.log(error, blogspot)
})

```

- Xóa 1 documents

```angular2html
var id = "5cb436980b33147489eadfbb";
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
 console.log(error, blogspot)
})
```




