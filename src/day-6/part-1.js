import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

console.time('Time');

const FILEPATH = './src/day-6/data/input.txt';

export const solve = (lines) => {
    const [buffer] = lines;
    const matches = [];

    const SIGNAL = 4;

    for (let i = 0; i < buffer.length; i += 1) {
        const [first, second, third, fourth] = buffer.slice(i, i + SIGNAL);
        const combined = [first, second, third, fourth].join('');
        const unique = new Set(combined).size === combined.length;

        if (unique) {
            const pointer = i + SIGNAL;
            matches.push({ pointer, combined });
        }
    }

    const [firstPointer] = matches;

    return firstPointer.pointer;
};

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(result))
    .catch((err) => {
        console.error(err);
    });

export default solve;
