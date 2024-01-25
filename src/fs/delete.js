import { rm } from 'node:fs/promises';
import { join } from 'node:path';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToFile = join(__dirname, 'files', 'fileToRemove.txt');


const remove = async () => {
    try {
        await rm(pathToFile);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();