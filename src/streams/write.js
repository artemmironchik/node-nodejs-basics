import { join } from 'node:path';
import { createWriteStream } from 'node:fs';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToFile = join(__dirname, 'files', 'fileToWrite.txt');

const stream = createWriteStream(pathToFile);

const write = async () => {
    process.stdin.pipe(stream);
};

await write();