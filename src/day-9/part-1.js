import parse from '../utils/parse.js';
import timer from '../utils/timer.js';

console.time('Time');

const FILEPATH = './src/day-9/data/input.txt';

export const solve = (lines) => {
    const moves = lines.reduce((acc, curr) => {
        const [dir, dis] = curr.split(' ');

        acc.push({ dir, dis: parseInt(dis, 10) });

        return acc;
    }, []);

    const HEAD = { x: 0, y: 0 };
    const TAIL = { x: 0, y: 0 };

    const visited = new Map();
    visited.set('0/0', 1);

    const getDistance = (x, y) => Math.hypot(HEAD.x - x, HEAD.y - y);

    const setVisited = (x, y) => {
        const key = `${x}/${y}`;
        const current = visited.has(key) ? visited.get(key) : 0;

        visited.set(key, current + 1);
    };

    const updateTail = () => {
        const distance = getDistance(TAIL.x, TAIL.y);

        if (distance >= 2) {
            if (HEAD.x > TAIL.x) {
                TAIL.x += 1;
            }

            if (HEAD.x < TAIL.x) {
                TAIL.x -= 1;
            }

            if (HEAD.y > TAIL.y) {
                TAIL.y += 1;
            }

            if (HEAD.y < TAIL.y) {
                TAIL.y -= 1;
            }
        }

        setVisited(TAIL.x, TAIL.y);
    };

    const moveHead = (direction, distance) => {
        if (direction === 'up') {
            for (let i = 0; i < distance; i += 1) {
                HEAD.y += 1;
                updateTail();
            }
        }

        if (direction === 'down') {
            for (let i = 0; i < distance; i += 1) {
                HEAD.y -= 1;
                updateTail();
            }
        }

        if (direction === 'left') {
            for (let i = 0; i < distance; i += 1) {
                HEAD.x -= 1;
                updateTail();
            }
        }

        if (direction === 'right') {
            for (let i = 0; i < distance; i += 1) {
                HEAD.x += 1;
                updateTail();
            }
        }
    };

    moves.forEach((move) => {
        const { dir, dis } = move;

        if (dir === 'U') {
            moveHead('up', dis);
        }

        if (dir === 'D') {
            moveHead('down', dis);
        }

        if (dir === 'L') {
            moveHead('left', dis);
        }

        if (dir === 'R') {
            moveHead('right', dis);
        }
    });

    return [...visited.entries()].length;
};

parse(FILEPATH)
    .then(solve)
    .then(timer)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((err) => {
        console.error(err);
    });

export default solve;
