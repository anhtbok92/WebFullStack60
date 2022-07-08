// Cach tao server don gian bang nodejs
const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
       res.end('Welcom to homepage')
   } else if (req.url === '/about') {
       res.end('This is about info')
   } else {
       res.end('Not Found');
   }
});

server.listen(5000);