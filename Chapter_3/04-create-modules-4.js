const authorModules = require('./04-create-modules-3');

const total = authorModules.sum(10, 20);
console.log('total', total);

const myAge = authorModules.myAge;
console.log('myAge', myAge);

const coursePerson = new authorModules.Person('Nguyen Tuan Anh', 31);
coursePerson.showInfoAuthor();