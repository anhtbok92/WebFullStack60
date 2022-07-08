/*
# 4. Create a modules
    - Có 2 cách tạo 1 modules
        + Sử dụng module.exports.
        + Sử dụng exports.
* */

// cach 1
module.exports.getMyDateTime = function () {
    return Date();
}

// cach 2
exports.getDirName = function () {
    return __dirname;
}

const MY_AGE = 31;

exports.myAge = MY_AGE;
console.log('modules1-content', module);