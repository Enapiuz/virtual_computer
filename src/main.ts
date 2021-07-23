import {Ports} from "./circuit/basic";
import {CircuitBoard} from "./circuit/circuit_board";
import {logDeep} from "./utils";

(async function () {
    // This function can be considered as a part of BIOS.

    // const trans = new Transistor();
    // console.log(trans.eval(true, true));
    // const lb1 = new AND();
    // console.log(lb1.getInputs());
    // console.log(lb1.getOutputs());
    // console.log(lb1.eval({[Ports.A]: true, [Ports.B]: true}))

    const board = new CircuitBoard();
    const result = board.eval({
        [Ports.A]: true,
        [Ports.B]: true
    });
    logDeep(result);

    // const bios = new BIOS();
    // const cpuramBus = new Bus(bios, "CPURAM");

    // init RAM, 2^16max
    // const ram = new RAM(bios, Math.pow(2, 16), cpuramBus);
    // ram.init();
    // init CPU
    // const cpu = new Processor(bios, cpuramBus);
    // cpu.check();
    // init VGA (???)
    // init storage
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
