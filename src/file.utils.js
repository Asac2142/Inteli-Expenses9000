import { createReadStream } from 'fs';
import { createInterface } from 'readline';

export const inputFile = createInterface({
    input: createReadStream('./assets/expenses.txt'),
    output: process.stdout,
    terminal: false
});

export default inputFile;
