import {BIOS} from "./bios";

export class Bus {
    constructor(protected readonly bios: BIOS, protected readonly name: string) {
        this.bios.log(`${this.name} bus init...`);
    }
}
