import each from "jest-each";
import {Adder16} from "./adder16";

describe("Ripple Adder 16bit", () => {
    const dataset = [
        {one: 0, two: 0b1111111111111111},
        {one: 0b1111111111111111, two: 0b1111111111111111},
        {one: 0b0000011111111111, two: 0b0000111111111111},
        {one: 0, two: 0},
    ];

    each(dataset).test("Sums right %o", (data) => {
        const add = new Adder16();
        const oneStr = data.one.toString(2).padStart(16, "0");
        const oneInput = oneStr
            .slice(oneStr.length - 16, oneStr.length)
            .split("")
            .map((char: string, idx: number) => {
                return [idx, char === "1"];
            });
        const twoStr = data.two.toString(2).padStart(16, "0");
        const twoInput = twoStr
            .slice(twoStr.length - 16, twoStr.length)
            .split("")
            .map((char: string, idx: number) => {
                return [idx + 16, char === "1"];
            });
        const resStr = (data.one + data.two).toString(2).padStart(16, "0");
        const expected = new Map(
            resStr
                .slice(resStr.length - 16, resStr.length)
                .split("")
                .map((char: string, idx: number) => {
                    return [idx + 16, char === "1"];
                })
        );
        const result = add.eval(new Map([...oneInput, ...twoInput]));
        expect(result.values()).toEqual(expected.values());
    });
});
