import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToDir = join(__dirname, 'files');

const list = async () => {
    try {
        const files = await readdir(pathToDir, { withFileTypes: true });

        for (const file of files) {
            console.log(file.name);
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();