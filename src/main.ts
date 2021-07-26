import {logDeep} from "./utils";
import {Adder} from "./circuit/blocks/adder";

(async function () {
    const board = new Adder();
    const result = board.eval(new Map([[0, false], [1, false], [2, true]]));
    logDeep(result);
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
