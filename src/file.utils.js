const fs = require('fs');
const readline = require('readline');

const inputFile = readline.createInterface({
    input: fs.createReadStream('./assets/expenses.txt'),
    output: process.stdout,
    terminal: false
});

//export default inputFile;
module.exports = inputFile;
