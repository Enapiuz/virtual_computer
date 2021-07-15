import {RAM} from "./memory/ram";
import {BIOS} from "./bios";
import {Bus} from "./bus";
import {Processor} from "./cpu/processor";

(async function () {
    // This function can be considered as a part of BIOS.

    const bios = new BIOS();
    const cpuramBus = new Bus(bios, "CPURAM");

    // init RAM
    const ram = new RAM(bios, 1024*1024, cpuramBus);
    ram.init();
    // init CPU
    const cpu = new Processor(bios, cpuramBus);
    cpu.check();
    // init VGA (???)
    // init storage
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
