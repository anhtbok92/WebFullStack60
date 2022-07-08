const createModules1 = require('./04-create-modules-1');

console.log('==============Modules duoc import==============');
console.log(createModules1);

console.log('modules2-content', module);

const myDateTime = createModules1.getMyDateTime();
const myDir = createModules1.getDirName();
const myAge = createModules1.myAge;

console.log('myDateTime is: ', myDateTime);
console.log('myDir is: ', myDir);
console.log('myAge is: ', myAge);

const total = createModules1.sum(10, 20);
console.log('total', total);