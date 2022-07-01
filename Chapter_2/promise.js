// 1. Ban dau khoi tao promise
const promisePending = new Promise((resolve, reject) => {

});

console.log('1. Trang thai Promise ban dau: ', promisePending);

// 2. Khi resolve dc goi
const promiseFulfilled = new Promise((resolve, reject) => {
   resolve();
});

console.log('2. Trang thai Promise khi resolve dc goi: ', promiseFulfilled);

// 3. Khi reject dc goi
const promiseRejected = new Promise((resolve, reject) => {
    reject();
});

console.log('3. Trang thai Promise khi reject dc goi: ', promiseRejected);


// 4. Khi resolve dc goi va tra ve data
const promiseFulfilledWithData = new Promise((resolve, reject) => {
    resolve(123);
});
console.log('4. Trang thai Promise khi resolve dc goi va tra ve data: ', promiseFulfilledWithData);


const promiseMethod = new Promise((resolve, reject) => {
    // const jsonData = {
    //     "name": "Nguyen Tuan Anh",
    //     "age": 31,
    //     "Job title": "Web fullstack developer"
    // };
    // const arrayData = [
    //     {
    //         'course': "Lap trinh fullstack web",
    //         'price': 20000000
    //     },
    //     {
    //         'course': "Lap trinh fullstack web 2",
    //         'price': 200000001
    //     },
    // ]
    // resolve(arrayData);

    const errorObject = {
        errorCode: 403,
        message: 'Ban khong co quyen truy cap'
    }
    reject(errorObject);
});

console.log('promiseRejectWithErrorMessage', promiseMethod);

// promiseMethod
//     .then(function (data) {
//         console.log('5. Promise method then called when resolve called: ', data);
//         // handle data
//     })
//     .catch(function () {
//         console.log('5. Promise method then called when reject called: ', "failure");
//     })
//     .finally(function () {
//         console.log('5. Promise method then called when resolve or reject called: ', "done");
//     })
