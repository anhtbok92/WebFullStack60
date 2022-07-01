### Bài tập về nhà
+ Bài 1
- Nhập vào tên user từ input
- Hiển thị thông tin của user từ github dựa vào API của github
- Các thông tin cần lấy ra : Tên, avatar, email, tên công ty, số lượng người flow
- Gợi ý :
    + Thiết kế giao diện form sử dụng HTML/CSS bao gồm input và 1 button + list danh sách <Tên, avatar, email, tên công ty, số lượng người flow>
    + Khi user nhập tên và click button, sẽ lấy tên và call API github
    + API : https://api.github.com/users/{name}
    + Trong trường hợp không tìm thấy hiển thị thông báo "Không tìm thấy user bạn yêu cầu"
    + Sử dụng các kiến thức về Callback, Promise, Async/await