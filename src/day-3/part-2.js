import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

import { getPriority, findBadges } from './helpers.js';

console.time('Time');

const FILEPATH = './src/day-3/data/input.txt';

export const solve = (lines) =>
    lines
        .reduce((acc, curr, index) => {
            if (index % 3 === 0) {
                acc.push([]);
            }

            acc[acc.length - 1].push(curr);

            return acc;
        }, [])
        .map((groups) => findBadges(groups))
        .map((badge) => getPriority(badge[0]))
        .reduce((acc, curr) => acc + curr, 0);

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(result))
    .catch((err) => {
        console.error(err);
    });

export default solve;
