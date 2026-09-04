console.log("Hello, World!");

const fss = require('fs');
fss.writeFile('output.txt', 'This is a test file.', (err) => {
    if (err) console.log('Error occurred while writing file.');
    else console.log('File written successfully');
});