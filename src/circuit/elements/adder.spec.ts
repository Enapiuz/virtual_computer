import each from "jest-each";

import {Adder} from "./adder";

describe("Adder", () => {
    each([
        {
            input: new Map([
                [0, false],
                [1, false],
                [2, false],
            ]),
            output: new Map([
                [0, false],
                [1, false],
            ]),
        },
        {
            input: new Map([
                [0, false],
                [1, false],
                [2, true],
            ]),
            output: new Map([
                [0, true],
                [1, false],
            ]),
        },
        {
            input: new Map([
                [0, false],
                [1, true],
                [2, false],
            ]),
            output: new Map([
                [0, true],
                [1, false],
            ]),
        },
        {
            input: new Map([
                [0, false],
                [1, true],
                [2, true],
            ]),
            output: new Map([
                [0, false],
                [1, true],
            ]),
        },
        {
            input: new Map([
                [0, true],
                [1, false],
                [2, false],
            ]),
            output: new Map([
                [0, true],
                [1, false],
            ]),
        },
        {
            input: new Map([
                [0, true],
                [1, false],
                [2, true],
            ]),
            output: new Map([
                [0, false],
                [1, true],
            ]),
        },
        {
            input: new Map([
                [0, true],
                [1, true],
                [2, false],
            ]),
            output: new Map([
                [0, false],
                [1, true],
            ]),
        },
        {
            input: new Map([
                [0, true],
                [1, true],
                [2, true],
            ]),
            output: new Map([
                [0, true],
                [1, true],
            ]),
        },
    ]).test("%o", (dataset) => {
        const adder = new Adder();
        const result = adder.eval(dataset.input);
        expect(result).toStrictEqual(dataset.output);
    });
});
