import {BIOS} from "../bios";
import {Bus, BusEvent} from "../bus";

const SYSTEM_NAME = "CPU";

enum Registers {
    R_R0 = 0,
    R_R1,
    R_R2,
    R_R3,
    R_R4,
    R_R5,
    R_R6,
    R_R7,
    R_PC /* program counter */,
    R_COND,
    R_COUNT,
}

enum Ops {
    OP_BR = 0 /* branch */,
    OP_ADD /* add  */,
    OP_LD /* load */,
    OP_ST /* store */,
    OP_JSR /* jump register */,
    OP_AND /* bitwise and */,
    OP_LDR /* load register */,
    OP_STR /* store register */,
    OP_RTI /* unused */,
    OP_NOT /* bitwise not */,
    OP_LDI /* load indirect */,
    OP_STI /* store indirect */,
    OP_JMP /* jump */,
    OP_RES /* reserved (unused) */,
    OP_LEA /* load effective address */,
    OP_TRAP /* execute trap */,
}

enum ConditionFlags {
    FL_POS = 1 << 0 /* P */,
    FL_ZRO = 1 << 1 /* Z */,
    FL_NEG = 1 << 2 /* N */,
}

enum Traps {
    TRAP_GETC = 0x20 /* get character from keyboard */,
    TRAP_OUT = 0x21 /* output a character */,
    TRAP_PUTS = 0x22 /* output a word string */,
    TRAP_IN = 0x23 /* input a string */,
    TRAP_PUTSP = 0x24 /* output a byte string */,
    TRAP_HALT = 0x25 /* halt the program */,
}

// Here must be a command queue, registers and other stuff.
// And a BIG BIG loop of commands with one-thread multitasking.
export class Processor {
    constructor(
        protected readonly bios: BIOS,
        protected readonly memoryBus: Bus
    ) {
        this.bios.log("CPU created");
        memoryBus.subscribe(SYSTEM_NAME, (sender: string, event: BusEvent) => {
            this.bios.log(`[${SYSTEM_NAME}] ${JSON.stringify(event)}`);
        });
    }

    public check() {
        this.bios.log("CPU self-checking...");
        this.memoryBus.publish(SYSTEM_NAME, {
            name: "write",
            data: 21232,
        });
    }
}
