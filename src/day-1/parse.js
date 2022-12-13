import fs from 'fs';
import readline from 'readline';

const parse = (path) => {
    const input = fs.createReadStream(path);

    const rl = readline.createInterface({
        input,
        crlfDelay: Infinity
    });

    return new Promise((resolve, reject) => {
        const elves = [];
        let elf = 0;

        rl.on('line', (line) => {
            if (line !== '') {
                elf += parseInt(line, 10);
            } else {
                elves.push(elf);
                elf = 0;
            }
        });

        rl.on('error', (err) => {
            reject(err);
        });

        rl.on('close', () => {
            resolve(elves);
        });
    });
};

export default parse;
