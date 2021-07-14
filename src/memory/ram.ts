import {BIOS} from "../bios";

export class RAM {
    protected memory: Array<any>

    constructor(protected bios: BIOS, size: number) {
        this.bios.log("RAM init...");
        this.bios.log(`Init ${size} bytes of memory`)
        this.memory = Array(size).fill(undefined);
    }
}
