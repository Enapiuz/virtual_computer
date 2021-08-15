import {MemoryRow16} from "./memory_row16";

describe("MemoryRow16", () => {
    it("has zero as a default state", () => {
        const row = new MemoryRow16();
        const input = new Map([
            [0, false],
            [1, false],
            [2, false],
            [3, false],
            [4, false],
            [5, false],
            [6, false],
            [7, false],
            [8, false],
            [9, false],
            [10, false],
            [11, false],
            [12, false],
            [13, false],
            [14, false],
            [15, false],
            [16, false], // write flag
        ]);
        const res = row.eval(input);
        expect(res).toEqual(
            new Map([
                [0, false],
                [1, false],
                [2, false],
                [3, false],
                [4, false],
                [5, false],
                [6, false],
                [7, false],
                [8, false],
                [9, false],
                [10, false],
                [11, false],
                [12, false],
                [13, false],
                [14, false],
                [15, false],
            ])
        );
    });

    it("saves state", () => {
        const row = new MemoryRow16();
        const input = new Map([
            [0, false],
            [1, false],
            [2, false],
            [3, false],
            [4, false],
            [5, false],
            [6, false],
            [7, false],
            [8, false],
            [9, false],
            [10, false],
            [11, true],
            [12, false],
            [13, false],
            [14, false],
            [15, false],
            [16, true], // write flag
        ]);
        const res = row.eval(input);
        expect(res).toEqual(
            new Map([
                [0, false],
                [1, false],
                [2, false],
                [3, false],
                [4, false],
                [5, false],
                [6, false],
                [7, false],
                [8, false],
                [9, false],
                [10, false],
                [11, true],
                [12, false],
                [13, false],
                [14, false],
                [15, false],
            ])
        );
    });
});
