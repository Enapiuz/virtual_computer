import each from "jest-each";

import {Adder} from "./adder";
import {Port} from "../basic";

describe("Adder", () => {
    each([
        {
            input: {[Port.P0]: false, [Port.P1]: false, [Port.P2]: false},
            output: {[Port.P0]: false, [Port.P1]: false}
        },
        {
            input: {[Port.P0]: false, [Port.P1]: false, [Port.P2]: true},
            output: {[Port.P0]: true, [Port.P1]: false}
        },
        {
            input: {[Port.P0]: false, [Port.P1]: true, [Port.P2]: false},
            output: {[Port.P0]: true, [Port.P1]: false}
        },
        {
            input: {[Port.P0]: false, [Port.P1]: true, [Port.P2]: true},
            output: {[Port.P0]: false, [Port.P1]: true}
        },
        {
            input: {[Port.P0]: true, [Port.P1]: false, [Port.P2]: false},
            output: {[Port.P0]: true, [Port.P1]: false}
        },
        {
            input: {[Port.P0]: true, [Port.P1]: false, [Port.P2]: true},
            output: {[Port.P0]: false, [Port.P1]: true}
        },
        {
            input: {[Port.P0]: true, [Port.P1]: true, [Port.P2]: false},
            output: {[Port.P0]: false, [Port.P1]: true}
        },
        {
            input: {[Port.P0]: true, [Port.P1]: true, [Port.P2]: true},
            output: {[Port.P0]: true, [Port.P1]: true}
        }
    ]).test("%o", (dataset) => {
        const adder = new Adder();
        const result = adder.eval(dataset.input);
        expect(result).toStrictEqual(dataset.output);
    });
});
