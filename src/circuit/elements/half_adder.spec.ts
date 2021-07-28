import each from "jest-each";
import {HalfAdder} from "./half_adder";

describe("Half adder", () => {
    each([
        {
            input: new Map([[0, false], [1, false]]),
            output: new Map([[0, false], [1, false]]),
        },
        {
            input: new Map([[0, false], [1, true]]),
            output: new Map([[0, true], [1, false]]),
        },
        {
            input: new Map([[0, true], [1, false]]),
            output: new Map([[0, true], [1, false]]),
        },
        {
            input: new Map([[0, true], [1, true]]),
            output: new Map([[0, false], [1, true]]),
        }
    ]).test("%o", (dataset) => {
        const ha = new HalfAdder();
        const result = ha.eval(dataset.input);
        expect(result).toEqual(dataset.output);
    });
});
