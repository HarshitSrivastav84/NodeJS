const sumRequestHandler = (req, res) => {
  console.log("On clicking the sum button", req.url);

  const body = [];
    req.on('data', (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const bodyStr = Buffer.concat(body).toString();
      // console.log(bodyObject);
      const params = new URLSearchParams(bodyStr);
      const bodyObj = Object.fromEntries(params);
      // console.log(bodyObj);
      const result = Number(bodyObj.first) + Number(bodyObj.second);
      console.log(result);

      res.write(
        `<html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Result</title>
        </head>
        <body>
          <h2>Result</h2>
          <p>The sum of ${bodyObj.first} and ${bodyObj.second} is ${result}.</p>
          <a href="/calculator">Calculate Again</a>
        </body>
        </html>`
      );
      return res.end(); 
    });
}

exports.sumRequestHandler = sumRequestHandler;