import { join } from 'node:path';
import { spawn } from 'node:child_process';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToFile = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [pathToFile, ...args])

    process.stdin.pipe(child.stdin)
    child.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
