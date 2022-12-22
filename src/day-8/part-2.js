import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

console.time('Time');

const FILEPATH = './src/day-8/data/input.txt';

export const solve = (lines) => {
    const trees = lines.map((line) => line.split('').map((char) => parseInt(char, 10)));

    const getColumn = (array, index) =>
        array
            .map((a) => a.filter((b, i) => i === index))
            .reduce((acc, curr) => acc.concat(curr), []);

    const findScore = (array, index, tree, direction) => {
        let score = 0;

        if (direction === 'up') {
            const up = array.slice(0, index).reverse();

            for (let i = 0; i < up.length; i += 1) {
                score += 1;
                if (tree <= up[i]) {
                    break;
                }
            }

            return score;
        }

        if (direction === 'down') {
            const down = array.slice(index + 1);

            for (let i = 0; i < down.length; i += 1) {
                score += 1;
                if (tree <= down[i]) {
                    break;
                }
            }

            return score;
        }

        if (direction === 'left') {
            const left = array.slice(0, index).reverse();

            for (let i = 0; i < left.length; i += 1) {
                score += 1;
                if (tree <= left[i]) {
                    break;
                }
            }

            return score;
        }

        const right = array.slice(index + 1);
        for (let i = 0; i < right.length; i += 1) {
            score += 1;
            if (tree <= right[i]) {
                break;
            }
        }

        return score;
    };

    const highest = trees.reduce((acc, tree, index) => {
        let highScore = 0;

        const row = trees[index];

        tree.forEach((t, i) => {
            const column = getColumn(trees, i);

            const scoreUp = findScore(column, index, t, 'up');
            const scoreDown = findScore(column, index, t, 'down');
            const scoreLeft = findScore(row, i, t, 'left');
            const scoreRight = findScore(row, i, t, 'right');

            const treeScore = scoreUp * scoreDown * scoreLeft * scoreRight;

            if (treeScore > highScore) {
                highScore = treeScore;
            }
        });

        if (highScore > acc) {
            return highScore;
        }

        return acc;
    }, 0);

    return highest;
};

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((err) => {
        console.error(err);
    });

export default solve;
