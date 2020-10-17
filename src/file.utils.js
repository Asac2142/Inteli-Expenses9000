const fs = require('fs');
const readline = require('readline');

const inputFile = readline.createInterface({
    input: fs.createReadStream('./assets/expenses.txt')
});

module.exports = inputFile;
