import { rename as renameFile } from 'fs/promises';
import { join } from 'node:path';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToOldFile = join(__dirname, 'files', 'wrongFilename.txt');
const pathToNewFile = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await renameFile(pathToOldFile, pathToNewFile);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();