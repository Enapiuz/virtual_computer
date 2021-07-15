import {BIOS} from "../bios";
import {Bus, BusEvent} from "../bus";

const SYSTEM_NAME = 'RAM';

export enum Commands {
    GetNextFreeCell = "next free"
}

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
        this.cpuBus.subscribe(SYSTEM_NAME, (sender: string, event: BusEvent) => {
            this.bios.log(`[${SYSTEM_NAME}] ${JSON.stringify(event)}`);
            switch (event.name) {
                case Commands.GetNextFreeCell:
                    this.bios.log("Got next free!");
                    this.cpuBus.publish(SYSTEM_NAME, {
                        name: "free cell",
                        data: 0,
                    })
                    break;
                default:
                    this.bios.crash("[RAM] received unsupported command!");
            }
        });
    }
}
