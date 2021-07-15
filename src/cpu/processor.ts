import {BIOS} from "../bios";
import {Bus} from "../bus";

const SYSTEM_NAME = "CPU";

// Here must be a command queue, registers and other stuff.
// And a BIG BIG loop of commands with one-thread multitasking.
export class Processor {
    constructor(
        protected readonly bios: BIOS,
        protected readonly memoryBus: Bus,
    ) {
        this.bios.log("CPU created");
        memoryBus.subscribe("CPU", (sender: string, event: any) => {
            if (sender !== SYSTEM_NAME) {
                this.bios.log(String(event));
            }
        });
    }

    public check() {
        this.bios.log("CPU self-checking...");
        this.memoryBus.publish(SYSTEM_NAME, "fill all 0");
    }
}
