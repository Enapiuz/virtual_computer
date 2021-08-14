import {logDeep} from "./utils";
import {Subtractor16} from "./circuit/elements/subtractor16";
import {Port} from "logic-board";
import {ChipBuilder} from "./circuit/chip_builder";

(async function () {
    // const board = new Subtractor16();
    // const inp: any = Array(32)
    //     .fill(undefined)
    //     .map((_e, idx): any[] => {
    //         return [idx, true];
    //     });
    // const inpMap = new Map<Port, boolean>(inp);
    // inpMap.set(32, false);
    // console.log(inpMap);
    // const result = board.eval(inpMap);
    const builder = new ChipBuilder();
    const result = builder.buildFromYamlFile(
        "src/circuit/chip_builder/adder.yml"
    );
    logDeep(result);
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
