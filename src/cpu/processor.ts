import {BIOS} from "../bios";
import {Bus, BusEvent} from "../bus";

const SYSTEM_NAME = "CPU";

// Here must be a command queue, registers and other stuff.
// And a BIG BIG loop of commands with one-thread multitasking.
export class Processor {
    constructor(
        protected readonly bios: BIOS,
        protected readonly memoryBus: Bus,
    ) {
        this.bios.log("CPU created");
        memoryBus.subscribe(SYSTEM_NAME, (sender: string, event: BusEvent) => {
            this.bios.log(`[${SYSTEM_NAME}] ${JSON.stringify(event)}`);
        });
    }

    public check() {
        this.bios.log("CPU self-checking...");
        this.memoryBus.publish(SYSTEM_NAME, {
            name: "next free",
            data: null,
        });
    }
}
