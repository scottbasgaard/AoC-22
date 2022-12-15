import fs from 'fs';
import readline from 'readline';

const parse = (path) => {
    const input = fs.createReadStream(path);

    const rl = readline.createInterface({
        input,
        crlfDelay: Infinity,
    });

    return new Promise((resolve, reject) => {
        const lines = [];

        rl.on('line', (line) => {
            lines.push(line);
        });

        rl.on('error', (err) => {
            reject(err);
        });

        rl.on('close', () => {
            resolve(lines);
        });
    });
};

export default parse;
