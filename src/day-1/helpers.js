export const calories = (lines) => {
    const elves = [];
    let elf = 0;

    lines.forEach((line) => {
        if (line !== '') {
            elf += parseInt(line, 10);
        } else {
            elves.push(elf);
            elf = 0;
        }
    });

    return elves;
};

export default calories;
