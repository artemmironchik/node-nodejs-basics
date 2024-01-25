import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { createRequire } from 'module';

import './files/c.js';

import { getDirname, getFilename } from '../utils/index.js';

const metaUrl = import.meta.url

const require = createRequire(metaUrl)

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    try {
        unknownObject = require('./files/a.json');
    } catch {}
} else {
    try {
        unknownObject = require('./files/b.json');
    } catch {}
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

const __filename = getFilename(import.meta.url);
const __dirname = getDirname(import.meta.url);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

