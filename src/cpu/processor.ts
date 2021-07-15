import {BIOS} from "../bios";
import {Bus} from "../bus";

// Here must be a command queue, registers and other stuff.
// And a BIG BIG loop of commands with one-thread multitasking.
export class Processor {
    constructor(
        protected readonly bios: BIOS,
        protected readonly memoryBus: Bus,
    ) {
        this.bios.log("CPU created");
    }

    public check() {
        this.bios.log("CPU self-checking...");
    }
}
