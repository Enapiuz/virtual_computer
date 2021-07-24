import {Port} from "./circuit/basic";
import {logDeep} from "./utils";
import {Adder} from "./circuit/blocks/adder";

(async function () {
    const board = new Adder();
    const result = board.eval({
        [Port.A]: true,
        [Port.B]: true,
        [Port.C]: false
    });
    logDeep(result);
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
