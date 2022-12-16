import path from 'path';
import { fileURLToPath } from 'url';

import parse from '../src/utils/parse.js';
import { solve as solve1 } from '../src/day-5/part-1.js';
import { solve as solve2 } from '../src/day-5/part-2.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILEPATH = path.resolve(__dirname, './data/day-5.txt');

describe('day 5', () => {
    describe('part 1', () => {
        it('returns correct crates', () => {
            const expected = 'CMZ';

            return parse(FILEPATH).then((data) => {
                const result = solve1(data);

                expect(result).toBe(expected);
            });
        });
    });

    describe('part 2', () => {
        it('returns correct crates', () => {
            const expected = 'MCD';

            return parse(FILEPATH).then((data) => {
                const result = solve2(data);

                expect(result).toBe(expected);
            });
        });
    });
});
