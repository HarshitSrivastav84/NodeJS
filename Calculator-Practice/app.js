const http = require('http');
const homePage = require('./home');

const server = http.createServer(homePage);

server.listen(3000, () => {
  console.log(`Server is running on address http://localhost:3000`);
});