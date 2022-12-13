import path from 'path';
import { fileURLToPath } from 'url';
import parse from '../src/day-1/parse.js';
import { solve as solve1 } from '../src/day-1/part-1.js';
import { solve as solve2 } from '../src/day-1/part-2.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILEPATH = path.resolve(__dirname, './data/day-1.txt');

describe('day 1', () => {
    describe('part 1', () => {
        it('finds the elf carrying the most calories and returns the total amount', () => {
            const expected = 24000;

            return parse(FILEPATH).then((data) => {
                const result = solve1(data);

                expect(result).toBe(expected);
            });
        });
    });

    describe('Part 2', () => {
        it('finds the top three elves carrying the most calories and returns the total amount', () => {
            const expected = 41000;

            return parse(FILEPATH).then((data) => {
                const result = solve2(data);

                expect(result).toBe(expected);
            });
        });
    });
});
