import parse from '../utils/parse.js'; // eslint-disable-line import/extensions
import timer from '../utils/timer.js'; // eslint-disable-line import/extensions

import { calories } from './calories.js'; // eslint-disable-line import/extensions

console.time('Time'); // eslint-disable-line no-console

const FILEPATH = './src/day-1/data/input.txt';

export const solve = (lines) => Math.max(...calories(lines));

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(result)) // eslint-disable-line no-console
    .catch((err) => {
        console.error(err); // eslint-disable-line no-console
    });

export default solve;
