const jsonExport = require('jsonexport');

const contacts = {
    name: 'Nguyen Tuan Anh',
    age: 31,
    courseName: 'Web Full stack'
};

jsonExport(contacts, function(err, csvContact){
    if (err) return console.error(err);
    console.log('csvContact', csvContact);
});