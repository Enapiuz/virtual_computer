import {BIOS} from "../bios";

export class RAM {
    protected memory: Array<any>

    constructor(protected bios: BIOS, protected readonly size: number) {
        this.bios.log("RAM created");
        this.memory = [];
    }

    public init() {
        this.bios.log(`Init ${this.size} bytes of memory`)
        this.memory = Array(this.size).fill(undefined);
    }
}
