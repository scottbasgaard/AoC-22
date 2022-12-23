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

    const initialPosition = { x: 0, y: 0 };

    const HEAD = { ...initialPosition };

    const numKnots = 9;
    const KNOTS = Array.from({ length: numKnots }, (_, i) => ({
        ...initialPosition,
        id: i,
    }));

    const visited = new Map();
    visited.set('0/0', 1);

    // eslint-disable-next-line no-unused-vars
    const drawMap = () => {
        const map = [];

        for (let y = -30; y <= 30; y += 1) {
            const row = [];

            for (let x = -30; x <= 30; x += 1) {
                const knot = KNOTS.reduce((acc, curr, index) => {
                    if (curr.x === x && curr.y === y) {
                        return index;
                    }

                    return acc;
                }, null);

                if (x === HEAD.x && y === HEAD.y) {
                    row.push('H');
                } else if (knot !== null) {
                    row.push(knot);
                } else if (x === 0 && y === 0) {
                    row.push('s');
                } else {
                    row.push('.');
                }
            }
            map.push(row);
        }

        console.log();

        map.reverse().forEach((row) => {
            console.log(row.join(''));
        });

        console.log();
    };

    // eslint-disable-next-line no-unused-vars
    const drawVisited = () => {
        const map = [];

        for (let y = -30; y <= 30; y += 1) {
            const row = [];

            for (let x = -30; x <= 30; x += 1) {
                const key = `${x}/${y}`;

                if (visited.has(key)) {
                    row.push('#');
                } else {
                    row.push('.');
                }
            }

            map.push(row);
        }

        console.log();

        map.reverse().forEach((row) => {
            console.log(row.join(' '));
        });

        console.log();
    };

    const getDistance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

    const setVisited = (x, y) => {
        const key = `${x}/${y}`;
        const current = visited.has(key) ? visited.get(key) : 0;

        visited.set(key, current + 1);
    };

    const updateKnots = () => {
        KNOTS.forEach((knot, index) => {
            const follow = index === 0 ? HEAD : KNOTS[index - 1];
            const distance = getDistance(knot.x, knot.y, follow.x, follow.y);

            if (distance >= 2) {
                if (follow.x > knot.x) {
                    KNOTS[index].x += 1;
                }

                if (follow.x < knot.x) {
                    KNOTS[index].x -= 1;
                }

                if (follow.y > knot.y) {
                    KNOTS[index].y += 1;
                }

                if (follow.y < knot.y) {
                    KNOTS[index].y -= 1;
                }
            }

            if (index === KNOTS.length - 1) {
                setVisited(knot.x, knot.y);
            }
        });

        // drawMap(); // eslint-disable-line
    };

    const moveHead = (direction, distance) => {
        if (direction === 'up') {
            for (let i = 0; i < distance; i += 1) {
                HEAD.y += 1;
                updateKnots();
            }
        }

        if (direction === 'down') {
            for (let i = 0; i < distance; i += 1) {
                HEAD.y -= 1;
                updateKnots();
            }
        }

        if (direction === 'left') {
            for (let i = 0; i < distance; i += 1) {
                HEAD.x -= 1;
                updateKnots();
            }
        }

        if (direction === 'right') {
            for (let i = 0; i < distance; i += 1) {
                HEAD.x += 1;
                updateKnots();
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

        // drawMap(); // eslint-disable-line
    });

    // drawVisited(); // eslint-disable-line

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
