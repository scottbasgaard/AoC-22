import path from 'path';
import { fileURLToPath } from 'url';

import parse from '../src/utils/parse.js';
import { solve as solve1 } from '../src/day-6/part-1.js';
import { solve as solve2 } from '../src/day-6/part-2.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILEPATH = path.resolve(__dirname, './data/day-6.txt');

describe('day 5', () => {
    describe('part 1', () => {
        it('returns correct number of characters', () => {
            const expected = 7;

            return parse(FILEPATH).then((data) => {
                const result = solve1(data);

                expect(result).toBe(expected);
            });
        });
    });

    describe('part 2', () => {
        it('returns correct number of characters', () => {
            const expected = 19;

            return parse(FILEPATH).then((data) => {
                const result = solve2(data);

                expect(result).toBe(expected);
            });
        });
    });
});
