### Thực hành giữa khóa

### 1. Mục tiêu và công nghệ sử dụng
- Mục tiêu: Xây dựng hệ thống ecommerce (các web thương mại điện tử) Restful API.
- Công nghệ: Nodejs, expressjs, mongoose, JWT...

### 2. Thiết kế database (model)

- Tạo ra các bảng gì ?
- Các bảng trong hệ thống web có mối quan hệ với nhau ntn?

- Có 3 bảng:
  + Bảng User (Xử lý liên quan đến register, login, logout, order)
  + Bảng Product (Lưu trữ các thông tin liên quan đến sản phẩm mà website đang cần bán)
  + Bảng Order (Lưu trữ các đơn hàng mà người dùng đã mua trên website)

### 3. Thiết kế chi tiết

- Bảng User (user table) - Quản lý người dùng và admin
  + name: string, required
  + email: string, required
  + password: string, required
  + isAdmin: boolean, required
- Bảng Product (product table) - Quản lý sản phẩm
  + user: Ref: User (sản phẩm này được tạo ra bởi ai)
  + name: string, required
  + image: string, required
  + brand: string, required (thương hiệu của sản phẩm)
  + category: string, required (loại sản phẩm)
  + description: string, required (mô tả về sản phẩm)
  + reviews: Object
    + name: string, required
    + rating: number, required
    + comment: string, required
    + user: Ref: User
  + rating: number, required (số rating trung bình của sản phẩm)
  + numReviews: number, required (Số lượng review)
  + price: number, required (giá của sản phẩm)
  + countInStock: number, required (số lượng hàng trong kho)
- Bảng Order (order table) - Quản lý các đơn hàng
  + user: Ref: User (sản phẩm này được mua bởi ai)
  + orderItems: Object (Thông tin đơn hàng)
    + name: string, required (tên sản phẩm)
    + qty: number, required (số lượng sản phẩm)
    + image: string, required (ảnh sản phẩm)
    + price: number, required (giá của sản phẩm)
    + product: Ref: Product (người dùng mua sản phẩm gì)
  + shippingAddress: Object (Địa chỉ cụ thể cho đơn hàng để ship)
    + address: string, required
    + city: string, required
    + postalCode: string, required
    + country: string, required
  + paymentResult: Object (kết quả thanh toán)
    + id: string
    + status: string
    + email_address: string
    + update_time: string
  + paymentMethod: string, required
  + shippingPrice: number, required
  + totalPrice: number
  + isPaid: boolean, required

### 4. Tạo data mẫu (seeder)

- Import từ file json hoặc csv hoặc object

### 5. Thiết kế API

1. Register a new user

```
// @desc: Register a new user
// @route: POST /api/users
// @access: Public - return token
```

2. Login

```
// @desc: User can login to system
// @route: POST /api/users/login
// @access: Public - return token
```

3. Get Profile user

```
// @desc: Get user profile
// @route: GET /api/users/profile
// @access: Private - Su dung token
```


4. Update Profile user

```
// @desc: update user profile
// @route: PUT /api/users/profile
// @access: Private - Su dung token
```