import { join } from 'node:path';
import { createReadStream } from 'node:fs';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

const stream = createReadStream(pathToFile);

const read = async () => {
    stream.pipe(process.stdout);
};

await read();