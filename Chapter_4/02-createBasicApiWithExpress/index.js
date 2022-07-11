// dung express create a basic server
const express = require('express');
const app = express();
const port = 5000;
const mangaRouter = require('./router/mangaRouter');

app.use(express.json());
app.use('/api/manga', mangaRouter);

// de bai
// 1. Su dung POSTMAN, call den API (GET) http://localhost:5000/api/manga -> tra ve danh sach cac quyen truyen
// 2. Su dung POSTMAN, call den API (POST) http://localhost:5000/api/manga -> Them vao danh sach 1 quyen truyen moi
app.listen(port, () => {
   console.log('Server running with port ', port);
});