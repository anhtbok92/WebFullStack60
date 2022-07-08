/*
* Global Object
* Tham khảo: https://nodejs.org/api/globals.html
* */

// __filename

console.log("fileName: ", __filename);

console.log("dirName: ", __dirname);

function printHelloWorld() {
    console.log('Hello World !!!');
}

setTimeout(printHelloWorld, 5000);

//
setInterval(printHelloWorld, 1000);

