import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

import { getPriority } from './helpers.js';

console.time('Time');

const FILEPATH = './src/day-3/data/input.txt';

export const solve = (lines) =>
    lines
        .map((line) => {
            const { length } = line;
            const regex = new RegExp(`.{1,${length / 2}}`, 'g');
            const [first, second] = line.match(regex);

            return [first, second];
        })
        .map(([first, second]) => {
            const regex = new RegExp(`[${first}]`, 'g');
            const match = second.match(regex);

            return getPriority(match[0]);
        })
        .reduce((acc, curr) => acc + curr, 0);

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(result))
    .catch((err) => {
        console.error(err);
    });

export default solve;
