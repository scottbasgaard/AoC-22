import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

import { calories } from './helpers.js';

console.time('Time');

const FILEPATH = './src/day-1/data/input.txt';

export const solve = (lines) => Math.max(...calories(lines));

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(result))
    .catch((err) => {
        console.error(err);
    });

export default solve;
