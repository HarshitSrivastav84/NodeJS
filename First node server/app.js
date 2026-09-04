const http = require('http');

// function requestListener(req, res){
//   console.log(req);
// }
// http.createServer(requestListener);

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node Server</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to home page</h1>');
    res.write('</body>');
    res.write('</html>');
    return; res.end();
    
  }
  else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node Server</title></head>');
    res.write('<body>');
    res.write('<h1>Checkout our products</h1>');
    res.write('</body>');
    res.write('</html>');
    return; res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Node Server</title></head>');
  res.write('<body>');
  res.write('<h1>Hello, World!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});    // Number(3000) is called port number  