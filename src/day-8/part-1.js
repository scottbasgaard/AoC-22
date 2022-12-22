import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

console.time('Time');

const FILEPATH = './src/day-8/data/input.txt';

export const solve = (lines) => {
    const trees = lines
        .map((line) => line.split(''))
        .map((line) => line.map((char) => parseInt(char, 10)));

    const getColumn = (array, index) =>
        array
            .map((a) => a.filter((b, i) => i === index))
            .reduce((acc, curr) => acc.concat(curr), []);

    const isVisible = (array, index, tree, direction) => {
        if (direction === 'up') {
            const up = array.slice(0, index);
            const max = Math.max(...up);

            return tree > max;
        }

        if (direction === 'down') {
            const down = array.slice(index + 1);
            const max = Math.max(...down);

            return tree > max;
        }

        if (direction === 'left') {
            const left = array.slice(0, index);
            const max = Math.max(...left);

            return tree > max;
        }

        const right = array.slice(index + 1);
        const max = Math.max(...right);

        return tree > max;
    };

    return trees.reduce((acc, curr, index) => {
        let visibleCount = 0;
        const firstRow = index === 0;
        const lastRow = index === trees.length - 1;

        if (firstRow || lastRow) {
            return acc + curr.length;
        }

        const copy = [...curr];
        copy.pop();
        copy.shift();

        const row = trees[index];

        copy.forEach((tree, i) => {
            const column = getColumn(trees, i + 1);

            const up = isVisible(column, index, tree, 'up');
            const down = isVisible(column, index, tree, 'down');
            const left = isVisible(row, i + 1, tree, 'left');
            const right = isVisible(row, i + 1, tree, 'right');

            if (up || down || left || right) {
                visibleCount += 1;
            }
        });

        visibleCount += 2;

        return acc + visibleCount;
    }, 0);
};

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((err) => {
        console.error(err);
    });

export default solve;
