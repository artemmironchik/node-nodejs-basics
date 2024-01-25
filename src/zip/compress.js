import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const sourcePath = join(__dirname, 'files', 'fileToCompress.txt');
const targetPath = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    await pipeline(
        createReadStream(sourcePath),
        createGzip(),
        createWriteStream(targetPath),
    ) 
};

await compress();