const http = require('http');
const fs = require('fs');

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
    res.write('<h1>Enter your details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name = "username" placeholder = "Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" value="male" id="male"><br>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" name="gender" value="female" id="female"><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return; res.end();
  }
  else if(req.url.toLowerCase() === "/submit-details" && 
        req.method === "POST") {
    fs.writeFileSync('user.txt', 'Harshit Srivastav');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Node Server</title></head>');
  res.write('<body>');
  res.write('<h1>Wrong URL</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});    // Number(3000) is called port number  