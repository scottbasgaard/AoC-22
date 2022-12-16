import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

console.time('Time');

const FILEPATH = './src/day-4/data/input.txt';

export const solve = (lines) =>
    lines
        .map((line) => {
            const [pair1, pair2] = line.split(',');

            return [pair1, pair2];
        })
        .map((pairs) =>
            pairs
                .map((pair) => pair.split('-'))
                .map(([min, max]) => [parseInt(min, 10), parseInt(max, 10)])
                .map(([min, max]) => Array.from({ length: max - min + 1 }, (_, i) => i + min)),
        )
        .map((ranges) => {
            const [first, second] = ranges;

            const [shortest, longest] =
                first.length < second.length ? [first, second] : [second, first];

            if (shortest.every((num) => longest.includes(num))) {
                return 1;
            }

            return 0;
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
