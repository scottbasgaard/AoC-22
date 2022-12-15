import parse from '../utils/parse.js'; // eslint-disable-line import/extensions
import timer from '../utils/timer.js'; // eslint-disable-line import/extensions

import { mapMove, getScore } from './rock-paper-scissors.js'; // eslint-disable-line import/extensions

console.time('Time'); // eslint-disable-line no-console

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
    .then((result) => console.log(result)) // eslint-disable-line no-console
    .catch((err) => {
        console.error(err); // eslint-disable-line no-console
    });

export default solve;
