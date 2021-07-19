import {RAM} from "./memory/ram";
import {BIOS} from "./bios";
import {Bus} from "./bus";
import {Processor} from "./cpu/processor";
import {Transistor} from "./circuit/transistor";
import {Basic, Ports} from "./circuit/basic";

(async function () {
    // This function can be considered as a part of BIOS.

    // const trans = new Transistor();
    // console.log(trans.eval(true, true));
    const bas = new Basic();
    console.log(bas.getInputs());
    console.log(bas.getOutputs());
    console.log(bas.eval({[Ports.A]: true, [Ports.B]: true}))

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
