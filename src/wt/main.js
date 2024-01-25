import { join } from 'node:path';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const pathToWorker = join(__dirname, 'worker.js');

const START_NUM = 10

const statusMap = {
    RESOLVED: 'resolved',
    ERROR: 'error',
}

const createWorker = (filename, workerData) => new Promise((resolve) => {
    const worker = new Worker(filename, { workerData })

    worker.on('message', (data) => resolve({
        status: statusMap.RESOLVED,
        data
    }))

    worker.on('error', () => resolve({
        status: statusMap.ERROR,
        data: null,
    }))
})

const performCalculations = async () => {
    const workerPromises = Array.from(
        { length: cpus().length }, 
        (_, index) => createWorker(pathToWorker, START_NUM + index))

    const result = await Promise.all(workerPromises)

    console.log(result)
};

await performCalculations();