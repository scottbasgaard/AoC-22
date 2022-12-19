import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

console.time('Time');

const FILEPATH = './src/day-7/data/input.txt';
const MAX_SIZE = 100000;

export const solve = (lines) => {
    const filesystem = new Map();
    const directories = [];
    const pwd = [];

    const runCommand = (_command) => {
        const [command, arg] = _command; // eslint-disable-line no-unused-vars

        if (command === 'cd') {
            if (arg === '/') {
                pwd.push('root');
                filesystem.set('root', 0);
            } else if (arg !== '..') {
                pwd.push(arg);
            } else if (arg === '..') {
                pwd.pop();
            }
        }
    };

    const createDir = (dirname) => {
        const key = `${pwd.join('/')}/${dirname}`;

        filesystem.set(key, 0);
    };

    const updateSize = (key, size) => {
        filesystem.set(key, size);
    };

    const updateParents = (key, size) => {
        const [parent, ...rest] = key.split('/').reverse();

        if (parent === 'root') {
            return;
        }

        const parentKey = rest.reverse().join('/');
        const currentSize = filesystem.get(parentKey);
        const newSize = currentSize + size;

        updateSize(parentKey, newSize);
        updateParents(parentKey, size);
    };

    const createFile = (size) => {
        const key = pwd.join('/');

        const currentSize = filesystem.get(key);
        const newSize = currentSize + size;

        updateSize(key, newSize);
        updateParents(key, size);
    };

    lines.forEach((line) => {
        const isInput = /^[$]/.test(line);
        if (isInput) {
            const terminal = line.split(/\s+/);
            if (terminal[0] === '$') {
                const [first, ...rest] = terminal; // eslint-disable-line no-unused-vars

                runCommand(rest);
            }
        }

        const dir = /^dir/.test(line);
        if (dir) {
            const [_, dirname] = line.split(/\s+/); // eslint-disable-line no-unused-vars

            createDir(dirname);
        }

        const file = /^\d/.test(line);
        if (file) {
            const [size] = line.split(/\s+/);

            createFile(parseInt(size, 10));
        }
    });

    filesystem.forEach((value, key) => {
        if (key === 'root') return;

        if (value <= MAX_SIZE) {
            directories.push(value);
        }
    });

    return directories.reduce((acc, curr) => acc + curr, 0);
};

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((err) => {
        console.error(err);
    });

export default solve;
