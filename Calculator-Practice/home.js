const { sumRequestHandler } = require('./sum');

const homePage = (req, res) => {
  console.log(req.url, req.method);

  if (req.url.toLowerCase() === "/calculator") {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
</head>
<body>
  <h2>Calculator</h2>
  <form action="/calculate-result" method="POST">
    <input type="number" name="first" placeholder="Enter first number" required>
    <input type="number" name="second" placeholder="Enter second number" required>
    <br>
    <button type="submit">Sum</button>
  </form>
</body>
</html>
`)
    return res.end();
  }
  else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {

    return sumRequestHandler(req, res);

    // const body = [];
    // req.on('data', (chunk) => {
    //   console.log(chunk);
    //   body.push(chunk);
    // });

    // req.on('end', () => {
    //   const bodyObject = Buffer.concat(body).toString();
    //   console.log(bodyObject);
    //   const params = new URLSearchParams(bodyObject);
    //   const bodyData = Object.fromEntries(params);
    //   console.log(bodyData);
    // })
  }

  else if (req.url.toLowerCase() === "/") {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>Welcome to calculation</h2>
  <a href="/calculator">Go to Calculator</a>
</body>
</html>
`)
    return res.end();
  };

  res.write(`
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>Page Not Found</h2>
  <a href="/">Go to home</a>
</body>
</html>
`)
  return res.end();
};

module.exports = homePage;