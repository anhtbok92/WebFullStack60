/*
- Để include 1 modules từ 1 file : sử dụng hàm require();
Module là gì ? có bao nhiêu loại
- Core Modules (module của nodejs)
- Local Modules (module tự tạo )
- Third Party Modules (module người khác viết và đẩy lên npmjs.com )
- Tham khảo : Tham khảo: https://www.w3schools.com/nodejs/ref_modules.asp
* */
// path
const path = require('path');
console.log('path-modules', path);
console.log('path-sep', path.sep);

// os modules
const os = require('os');
const user = os.userInfo();
console.log('user-os', user);

var fs = require('fs');
fs.readFile('demofile.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});