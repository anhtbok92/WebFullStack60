const Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfoAuthor() {
        console.log('name=' + this.name + ', ' + 'age=' + this.age);
    }
}

const sum = function (a, b) {
    return a + b;
}

const AuthorInfo = {
    Person: Person,
    myAge: 31,
    sum: sum,
}

module.exports = AuthorInfo;