import parse from './parse.js'; // eslint-disable-line import/extensions
import timer from '../utils/timer.js'; // eslint-disable-line import/extensions

console.time('Time'); // eslint-disable-line no-console

const FILEPATH = './src/day-1/data/input.txt';

// eslint-disable-next-line import/prefer-default-export
export const solve = (elves) =>
    elves
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((acc, curr) => acc + curr, 0);

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(result)) // eslint-disable-line no-console
    .catch((err) => {
        console.error(err); // eslint-disable-line no-console
    });
