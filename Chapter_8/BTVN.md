### Bài tập 
### Bài 1: Tạo API quản lý user trong lớp
- Công nghệ: express-generator, mongoose, mongodb.
- Kết nối đến mongodb
- Sử dụng mongoose định nghĩa model : users
    + Tên (name)
    + Tuổi (age)
    + Địa chỉ (address)
    + Giới tính (gender)
    + Số điện thoại (phone number)
    + Email (email)
    + password
- Sử dụng mongoose định nghĩa model : products
  + Tên (product_name)
  + Giá: (product_price)
  + Số lượng:

- Tạo API crud
  + Tạo API register new member với email và password
  + Tạo API login vào hệ thống, trả về token 
  + Lấy ra danh sách toàn bộ sản phẩm trong hệ thống (không cần gửi lên token)
  + Thêm 1 sản phẩm mới vào hệ thống (cần gửi lên token)
  + Cập nhật thông tin của 1 sản phẩm bất kỳ dựa vào ID -> (cần gửi lên token)
  + Xóa 1 sản phẩm trong database bởi ID (cần gửi lên token)