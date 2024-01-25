import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const data = await readFile(pathToFile);

        console.log(data.toString());
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();