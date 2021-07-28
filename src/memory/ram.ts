import {BIOS} from "../bios";
import {Bus, BusEvent} from "../bus";
import {Row} from "./row";

const SYSTEM_NAME = "RAM";

export enum Commands {
    Write = "write",
}

export class RAM {
    protected memory: Array<Row>;

    constructor(
        protected readonly bios: BIOS,
        protected readonly size: number,
        protected readonly cpuBus: Bus
    ) {
        this.bios.log("RAM created");
        this.memory = [];
    }

    public init() {
        this.bios.log(`Init ${this.size} bytes of memory`);
        this.memory = Array(this.size)
            .fill(undefined)
            .map(() => new Row());
        this.cpuBus.subscribe(
            SYSTEM_NAME,
            (sender: string, event: BusEvent) => {
                this.bios.log(`[${SYSTEM_NAME}] ${JSON.stringify(event)}`);
                switch (event.name) {
                    case Commands.Write:
                        this.bios.log("Write to RAM");
                        break;
                    default:
                        this.bios.crash("[RAM] received unsupported command!");
                }
            }
        );
    }
}
