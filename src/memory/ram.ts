import {BIOS} from "../bios";
import {Bus} from "../bus";

const SYSTEM_NAME = 'RAM';

export class RAM {
    protected memory: Array<any>

    constructor(
        protected readonly bios: BIOS,
        protected readonly size: number,
        protected readonly cpuBus: Bus,
    ) {
        this.bios.log("RAM created");
        this.memory = [];
    }

    public init() {
        this.bios.log(`Init ${this.size} bytes of memory`)
        this.memory = Array(this.size).fill(undefined);
        this.cpuBus.subscribe("RAM", (sender: string, event: any) => {
            if (sender !== SYSTEM_NAME) {
                this.bios.log(String(event));
            }
        });
    }
}
