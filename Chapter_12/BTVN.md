#### Bài 1

- Deploy code bài tập 8-9-10-11 lên heroku
- Connect database trong các bài học trên lên Mongo Atlas
- Tạo 1 file note chứa thông tin API và request body để có thể chạy được API đó
- API document ví dụ như sau:

```
// @desc: Register a new user
// @route: POST https://mindx.herokuapp.com/api/users
// request body:
{
    "email": "victory1080@gmail.com",
    "name": "Nguyen Tuan Anh",
    "password": "123456",
    "isAdmin": true
}
// @access: Public - return token
```