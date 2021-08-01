import {logDeep} from "./utils";
import {Subtractor16} from "./circuit/elements/subtractor16";
import {Port} from "./circuit/basic";

(async function () {
    const board = new Subtractor16();
    const inp: any = Array(32)
        .fill(undefined)
        .map((_e, idx): any[] => {
            return [idx, true];
        });
    const inpMap = new Map<Port, boolean>(inp);
    inpMap.set(32, false);
    console.log(inpMap);
    const result = board.eval(inpMap);
    logDeep(result);
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
