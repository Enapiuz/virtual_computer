import each from "jest-each";
import {Subtractor16} from "./subtractor16";

describe("Ripple Subtractor 16bit", () => {
    const dataset = [
        {one: 0, two: 0b1111111111111111, expect: 0b0000000000000001},
        {
            one: 0b1111111111111111,
            two: 0b1111111111111111,
            expect: 0b1111111111111111 - 0b1111111111111111,
        },
        {
            one: 0b00001111111111110,
            two: 0b0000011111111111,
            expect: 0b00001111111111110 - 0b0000011111111111,
        },
        {
            one: 0b0000011111111111,
            two: 0b0000111111111111,
            expect: 0b1111100000000000,
        },
        {one: 0, two: 0, expect: 0},
    ];

    each(dataset).test("Subtracts right %o", (data) => {
        const add = new Subtractor16();
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
        const resStr = data.expect.toString(2).padStart(16, "0");
        const expected = new Map(
            resStr
                .slice(resStr.length - 16, resStr.length)
                .split("")
                .map((char: string, idx: number) => {
                    return [idx + 16, char === "1"];
                })
        );
        const result = add.eval(
            new Map([...oneInput, ...twoInput, [32, true]])
        );
        console.log(result.values());
        expect(result.values()).toEqual(expected.values());
    });
});
