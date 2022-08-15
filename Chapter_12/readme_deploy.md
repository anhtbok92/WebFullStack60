# Deploy project Nodejs lên Heroku

Bước 1. Tạo App trên Heroku

Web : https://dashboard.heroku.com/apps

![image info](./images/heroku.png)

Bước 2. Click tab Deploy

![img.png](images/img.png)

Bước 3. Deploy source code

![img.png](images/step3.png)

- Cài đặt Heroku CLI -> Giống git CLI, sử dụng để quản lý source code, push code lên Heroku server
- Các command cần sử dụng
    + `Heroku login` : sẽ mở browser và tự động login
    ![img.png](images/login.png)
      
    + `heroku git:clone -a mindx` : clone git trên server về source code trên local, chuẩn bị cho push source code từ local lên server heroku
    
    + `git add .` : Thêm các file của source code lên git heroku cli
      
    + `$ git commit -am "make it better"` : commit lên git heroku
      
    + `$ git push heroku master` : push code lên git heroku
    
    + `$ heroku open` : Mở ứng dụng đã deploy
    
    + `$ heroku logs --tail` : Debug logs khi xảy ra lỗi
    
Bước 4. Chỉnh sửa pagekage.json

```angular2html
"scripts": {
    "start": "node index.js",
    "start:dev": "nodemon fileName.js"
},
```

Vì khi deploy lên server thật, code sẽ không thường xuyên thay đổi nữa, vì thế
chúng ta không cần sử dụng `nodemon` nữa. Quay trở lại sử dụng node để start ứng dụng

Bước 5. Chỉnh sửa cổng lắng nghe ứng dụng trên index.js

```angular2html
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})
```
Giải thích :

- process.env.PORT : Biến môi trường nếu tồn tại file .env hoặc cấu hình trên Heroku
- Nếu không setting mặc định đc gọi trên port 3000

Bước 6. Kết nối mongodb sử dụng MongoDB Atlas

Webiste: https://cloud.mongodb.com
Login = account gmail

- Tạo cluster
- Connect

![img.png](images/atlat.png)

Chú ý : connect phải pass qua 2 step 
`Setup connection security` và `Choose a connection method`

![cluster.png](images/cluster.png)

- Url connect

```angular2html
mongodb+srv://anhtbok:87654321@cluster0.i6xzm.mongodb.net/my_database?retryWrites=true&w=majority
```

- Chỉnh sử database URL trong index.js

```angular2html
const mongoAtlasUri = "mongodb+srv://anhtbok:87654321@cluster0.i6xzm.mongodb.net/my_database?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose blog mindx is connected")
    );
} catch (e) {
    console.log("could not connect");
}
```

Bước 7. Deploy code lên heroku

```angular2html
$ git add .
$ git commit -am "make it better"
$ git push heroku master
$ heroku open
```