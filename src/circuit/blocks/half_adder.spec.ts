import each from "jest-each";
import {Port} from "../basic";
import {HalfAdder} from "./half_adder";

describe("Half adder", () => {
    each([
        {
            input: {[Port.P0]: false, [Port.P1]: false},
            output: {[Port.P0]: false, [Port.P1]: false},
        },
        {
            input: {[Port.P0]: false, [Port.P1]: true},
            output: {[Port.P0]: true, [Port.P1]: false},
        },
        {
            input: {[Port.P0]: true, [Port.P1]: false},
            output: {[Port.P0]: true, [Port.P1]: false},
        },
        {
            input: {[Port.P0]: true, [Port.P1]: true},
            output: {[Port.P0]: false, [Port.P1]: true},
        }
    ]).test("%o", (dataset) => {
        const ha = new HalfAdder();
        const result = ha.eval(dataset.input);
        expect(result).toEqual(dataset.output);
    });
});
