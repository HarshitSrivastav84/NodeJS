const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  
  if (req.url.toLowerCase() === "/home") {
    res.write('<h1>Welcome to home</h1>');
    return res.end();
  }
  else if (req.url.toLowerCase() === "/men") {
    res.write('<h1>Welcome to Men section</h1>');
    return res.end();
  }
  else if (req.url.toLowerCase() === "/women") {
    res.write('<h1>Welcome to Women section</h1>');
    return res.end();
  }
  else if (req.url.toLowerCase() === "/kids") {
    res.write('<h1>Welcome to Kids section</h1>');
    return res.end();
  }
  else if (req.url.toLowerCase() === "/cart") {
    res.write('<h1>Welcome to cart</h1>');
    return res.end();
  }

  res.write(
    `<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <head>
    <nav>
    <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/men">Men</a></li>
    <li><a href="/women">Women</a></li>
    <li><a href="/kids">Kids</a></li>
    <li><a href="/cart">🛒</a></li>
    </ul>
    </nav>
    </head>
    </body>
    </html>`
  );
  return res.end();
});
  
server.listen(3000, () => {
  console.log(`Server is running on address http://localhost:3000`);
});