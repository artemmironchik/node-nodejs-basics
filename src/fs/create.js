import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToFile = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(pathToFile, 'I am fresh and young', { flag: 'wx' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();