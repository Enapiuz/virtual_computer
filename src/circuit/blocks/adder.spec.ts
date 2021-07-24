import each from "jest-each";

import {Adder} from "./adder";
import {Port} from "../basic";

describe("Adder", () => {
    each([
        {
            input: {[Port.A]: false, [Port.B]: false, [Port.C]: false},
            output: {[Port.A]: false, [Port.B]: false}
        },
        {
            input: {[Port.A]: false, [Port.B]: false, [Port.C]: true},
            output: {[Port.A]: true, [Port.B]: false}
        },
        {
            input: {[Port.A]: false, [Port.B]: true, [Port.C]: false},
            output: {[Port.A]: true, [Port.B]: false}
        },
        {
            input: {[Port.A]: false, [Port.B]: true, [Port.C]: true},
            output: {[Port.A]: false, [Port.B]: true}
        },
        {
            input: {[Port.A]: true, [Port.B]: false, [Port.C]: false},
            output: {[Port.A]: true, [Port.B]: false}
        },
        {
            input: {[Port.A]: true, [Port.B]: false, [Port.C]: true},
            output: {[Port.A]: false, [Port.B]: true}
        },
        {
            input: {[Port.A]: true, [Port.B]: true, [Port.C]: false},
            output: {[Port.A]: false, [Port.B]: true}
        },
        {
            input: {[Port.A]: true, [Port.B]: true, [Port.C]: true},
            output: {[Port.A]: true, [Port.B]: true}
        }
    ]).test("%o", (dataset) => {
        const adder = new Adder();
        const result = adder.eval(dataset.input);
        expect(result).toStrictEqual(dataset.output);
    });
});
