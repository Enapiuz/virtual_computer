import {Port} from "./circuit/basic";
import {logDeep} from "./utils";
import {Adder} from "./circuit/blocks/adder";

(async function () {
    const board = new Adder();
    const result = board.eval({
        [Port.P0]: false,
        [Port.P1]: false,
        [Port.P2]: true
    });
    logDeep(result);
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
