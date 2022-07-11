# Bài 2 - Module nodejs và Express framework

## I. Mục tiêu
*  Giới thiệu Express
*  Khởi tạo và chạy dự án đầu tiên với Express
*  Tìm hiểu các module cần thiết để chạy dự án
------

### 2. Giới thiệu Express framework
- Express có gì ? [#link](https://viettuts.vn/nodejs/express-framework-trong-nodejs#goto-h2-4)
- có framework nào khác? [#link](https://www.simform.com/blog/best-nodejs-frameworks/)
    - Cung cấp các phương thức để viết chương trình backend. Express cũng cấp: Routing, middleware, static file ...
- Mô hình MVC. 
    - ![MVC](https://eno.tkwebgiare.com/sites/default/files/inline-images/mo-hinh-mvc.jpg)   
    - Mô hình mcv là quy ước viết chương trình. Theo đó, các việc xử lý request, hiển thị dữ liệu , xử lý dữ liệu phải tách bạch ra theo quy định.
    - M: Model, xử lý các method liên quan đến dữ liệu
    - V: View , giao diện người dùng. Nodejs có 1 vài template engines (Template engine helps us to create an HTML template with minimal code) như pug, Mustache, EJS
        - 1 vài template engines [# link](https://colorlib.com/wp/top-templating-engines-for-javascript/)
    - C: controller xử lý logic app

- Luồng chạy cơ bản của MVC vào Express
    - Router nhận diện và phân luồng các request theo method. Trong router có middleware để tiền sử lý hoặc hậu sử lý các request
    - Router chia các request đến từng Controller
    - Controler xử lý logic gọi đến model để lấy dữ liệu ra để sử lý theo yêu cầu của client

### 3. First Project with Express
- Tạo dự án với npm:
    ```
    npm init
    ...
    name: (project-name) project-name
    version: (0.0.0) 0.0.1
    description: The Project Description
    entry point: //leave empty
    test command: //leave empty
    git repository: //the repositories url
    keywords: //leave empty
    author: // your name
    license: N/A

    ...
    ...

    npm install express --save
    ```

- Router Express và RESTful API [#RESTful](https://topdev.vn/blog/restful-api-la-gi/)
- [RESTful](https://topdev.vn/blog/restful-api-la-gi/)
- Cấu trúc thư mục (Phụ thuộc vào SA và dự án)
- Code hướng dẫn sử dụng npm để quản lý package (Code trong NPM)
- Code mẫu sử dụng express để tạo rest API trong BuildRestFulApiUsingExpress

## Tổng kết
- http và http method
- cài đặt và sử dụng express