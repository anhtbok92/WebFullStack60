// ES6
// 1. Arrow Function
// =>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// cach viet function old
const odd = numbers.filter(function (n) {
    return n % 2 === 1;
});
console.log('odd', odd);

// cach viet es6 - voi arrow
const oddArrow = numbers.filter(n => n % 2 === 1);
console.log('oddArrow', oddArrow);

// 2. Default parameter
function multiply (a, b) {
    var b = typeof  b !== undefined ? b : 1;
    return a * b;
}

// cach viet su dung es6
function multiplyArrow(a, b = 1) {
    return a * b;
}
multiplyArrow(5);

// 3. Destructuring (Phân rã)
// array
const numbersArr = ['one', 'two', 'three'];
// cach cu
const one = numbersArr[0];
const two = numbersArr[1];
const three = numbersArr[2];

// cach moi
const [oneArrow, twoArrow, threeArrow] = numbersArr;

// object
const obj = { firstName: 'Anh', lastName: 'Nguyen Tuan' };
// cach cu
const firstName = obj.firstName;
const lastName = obj.lastName;

// cach dest
const { firstNameDest, lastNameDest } = obj;
console.log('firstNameDest', firstNameDest);
console.log('lastNameDest', lastNameDest);


// 4. Spread syntax
// cach cu array
const oldArray = [1, 2, 3];
const newArray = [oldArray, 4, 5];
console.log('newArray', newArray);

// cach moi
const oldArray2 = [1, 2, 3];
const newArray2 = [...oldArray2, 4, 5];
console.log('newArray2', newArray2);


// cach cu object
const oldObject = {
    name: 'Nguyen Tuan Anh'
};

const newObject = {
    oldObject,
    age: 31
};

console.log('newObject', newObject);

// cach moi object
const oldObject2 = {
    name: 'Nguyen Tuan Anh'
};

const newObject2 = {
    ...oldObject2,
    age: 31
};

console.log('newObject2', newObject2);

// 5. Rest parameter (Tham số "còn lại")
// - Là tham số đại diện cho những tham số không được khai báo
function numbersRest(num1, num2, ...numOther) {
    console.log('x', num1);
    console.log('y', num2);
    console.log('Other number: ', numOther);
}

numbersRest('one', 'two', 'three', 'four', 'five', 'six');

// 6. Classes - oop
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' dang phat ra am thanh');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' dang sua');
    }
}

// 7. Template string
// cach viet cu
const name = 'Tuan Anh'
const time = 'today';

console.log('Hello' + name + ' ' + time);
console.log(`Hello ${name} ${time}`);