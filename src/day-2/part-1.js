import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

import { mapMove, getScore } from './tournament.js';

console.time('Time');

const FILEPATH = './src/day-2/data/input.txt';

export const solve = (lines) =>
    lines
        .map((line) => line.split(' '))
        .map(([player1, player2]) => [mapMove(player1), mapMove(player2)])
        .map(([player1, player2]) => getScore(player1, player2))
        .reduce((acc, curr) => {
            if (curr === 0) {
                return acc;
            }

            return acc + curr;
        }, 0);

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(result))
    .catch((err) => {
        console.error(err);
    });

export default solve;
