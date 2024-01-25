import { readFile } from 'fs/promises';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const data = await readFile(pathToFile);

    const hash = createHash('sha256').update(data).digest('hex');

    console.log(hash);
};

await calculateHash();