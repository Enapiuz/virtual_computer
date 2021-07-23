import {Ports} from "./circuit/basic";
import {logDeep} from "./utils";
import {HalfAdder} from "./circuit/blocks/half_adder";

(async function () {
    const board = new HalfAdder();
    const result = board.eval({
        [Ports.A]: true,
        [Ports.B]: true
    });
    logDeep(result);
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
