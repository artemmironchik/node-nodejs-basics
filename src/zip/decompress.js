import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const sourcePath = join(__dirname, 'files', 'archive.gz');
const targetPath = join(__dirname, 'files', 'fileToCompress.txt');


const decompress = async () => {
    await pipeline(
        createReadStream(sourcePath),
        createGunzip(),
        createWriteStream(targetPath),
    ) 
};

await decompress();