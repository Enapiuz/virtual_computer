import each from "jest-each";
import {Port} from "../basic";
import {HalfAdder} from "./half_adder";

describe("Half adder", () => {
    each([
        {
            input: {[Port.A]: false, [Port.B]: false},
            output: {[Port.A]: false, [Port.B]: false},
        },
        {
            input: {[Port.A]: false, [Port.B]: true},
            output: {[Port.A]: true, [Port.B]: false},
        },
        {
            input: {[Port.A]: true, [Port.B]: false},
            output: {[Port.A]: true, [Port.B]: false},
        },
        {
            input: {[Port.A]: true, [Port.B]: true},
            output: {[Port.A]: false, [Port.B]: true},
        }
    ]).test("%o", (dataset) => {
        const ha = new HalfAdder();
        const result = ha.eval(dataset.input);
        expect(result).toEqual(dataset.output);
    });
});
