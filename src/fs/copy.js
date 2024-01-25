import { cp } from 'fs/promises';
import { join } from 'node:path';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToCopiedDirectory = join(__dirname, 'files');
const pathToNewDirectory = join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await cp(pathToCopiedDirectory, pathToNewDirectory, { errorOnExist: true, force: false, recursive: true });
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
