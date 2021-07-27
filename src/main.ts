import {logDeep} from "./utils";
import {Adder16} from "./circuit/blocks/adder16";

(async function () {
    const board = new Adder16();
    const imp: number[][] = Array(32)
        .fill(undefined)
        .map((_e, idx): any[] => {
            return [idx, true];
        });
    console.log(imp);
    //@ts-ignore
    const result = board.eval(new Map(imp));
    logDeep(result);

})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
