### 1. Tạo ra middleware và sử dụng nó.

Nhiệm vụ:
Tạo 1 server, khi user truy cập vào trang
- localhost:5000/ -> Hiển thị ra Truy cập homepage thành công
- localhost:5000/shopping-cart -> Hiển thị ra truy cập trang giỏ hàng thành công
- localhost:5000/admin 
 + Không có middleware -> Hiển thị ra truy cập admin thành công
 + Có middleware -> Bạn không có quyền truy cập vào trang này

Mục đích: Tạo ra 1 middleware có nhiệm vụ chặn không có người dùng truy cập vào trang admin nếu không có quyền.

### 2. Phân chia layout - Sử dụng template engine
- Tạo sao phải phân chia layout ?
- Sẽ sử dụng template engine nào ?
- Thực hành chia layout của 1 website

### 3. Mongodb
- Mongodb là gì ?
- So sánh NoSQL và SQL
- Thực hành CRUD với mongo sử dụng nodejs + express