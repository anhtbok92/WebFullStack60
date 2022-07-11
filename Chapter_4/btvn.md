### Bài 1.

- Sử dụng postman, call đến API (PUT) http://localhost:5000/api/manga/{id} -> Cập nhật tên của 1 quyển truyện trong mảng
  + Phương thức của express routing đến : PUT
  + Data trong body request lên server: id (muốn đổi quyển truyện nào thì gửi id quyển truyện đó) và tên mới (name)
  + Trong manga router -> (Dùng hàm gì của javascript để tìm 1 phần tử trong mảng và cập nhật 1 phần tử của mảng)
  
- Sử dụng postman, call đến API (DELETE) http://localhost:5000/api/manga/{id} -> Xóa 1 quyển truyện khỏi danh sách
    + Phương thức của express routing đến : DELETE
    + Data trong body request lên server: id (muốn xóa quyển truyện nào thì gửi id quyển truyện đó)
    + Trong manga router -> (Dùng hàm gì của javascript để tìm 1 phần tử trong mảng và xóa phần tử đó ra khỏi mảng)

### Bài 2.

- Cho 1 mảng json danh sách user như sau:

const users = [{
    id: 1,
    name: 'Nguyen Tuan Anh'
},
{
// ban 1
},
{
// ban 2
}
]
- Sử dụng postman, call đến API (GET) http://localhost:5000/api/user -> Lấy ra danh sách user của hệ thống
- Sử dụng postman, call đến API (POST) http://localhost:5000/api/user -> Tạo ra 1 thành viên mới của lớp
- Sử dụng postman, call đến API (PUT) http://localhost:5000/api/user/{id} -> Cập nhật tên 1 bạn trong lớp
- Sử dụng postman, call đến API (DELETE) http://localhost:5000/api/user/{id} -> Xóa 1 bạn ra khỏi danh sách.