export const createData = (lines) =>
    lines.reduce(
        (acc, curr) => {
            const crateMatch = curr.match(/[A-Z]/g);
            if (crateMatch) {
                acc[0].push(curr);
            }

            const moveMatch = curr.match(/move/g);
            if (moveMatch) {
                acc[1].push(curr);
            }

            return acc;
        },
        [[], []],
    );

export default createData;
