import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

import { createData } from './helpers.js';

console.time('Time');

const FILEPATH = './src/day-5/data/input.txt';

export const solve = (lines) => {
    const [theCrates, theMoves] = createData(lines);

    const stacks = theCrates
        .map((input) => {
            const slots = new Array((input.split('\n')[0].length + 1) / 4).fill('');
            const matches = [...input.matchAll(/\[([A-Z])]/gm)];

            return matches.reduce((acc, match) => {
                const letter = match[1];
                const index = ((match.index || 0) % (slots.length * 4)) / 4;
                acc[index] = [acc[index], letter].join('');

                return acc;
            }, slots);
        })
        .reduce((acc, curr) => {
            curr.forEach((crate, index) => {
                if (crate !== '') {
                    if (!acc[index + 1]) {
                        acc[index + 1] = [];
                    }

                    acc[index + 1].push(crate);
                }

                return crate;
            });

            return acc;
        }, {});

    theMoves.forEach((move) => {
        const [numCrates, fromStack, toStack] = move.match(/\d+/g);

        for (let i = 0; i < numCrates; i += 1) {
            stacks[toStack].unshift(stacks[fromStack].shift());
        }

        return move;
    });

    return Object.values(stacks)
        .map((stack) => stack[0])
        .join('');
};

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(result))
    .catch((err) => {
        console.error(err);
    });

export default solve;
