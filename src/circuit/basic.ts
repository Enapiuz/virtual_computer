export enum Ports {
    A = 0b00000001,
    B = 0b00000010,
    C = 0b00000100,
    D = 0b00001000,
    E = 0b00010000,
    F = 0b00100000,
    G = 0b01000000,
    H = 0b10000000
}

export type PortMap = {
    [key in Ports]?: boolean;
}

export type TruthTable = {
    [key in Ports]?: {[key in Ports]?: boolean};
}

export class Basic {
    protected inputs: Set<Ports> = new Set();
    protected outputs: Set<Ports> = new Set();

    constructor() {
        this.listInputs();
        this.listOutputs();
        // TODO: validate truth table
    }

    protected readonly truthTable: TruthTable = {
        [Ports.A]: {[Ports.A]: false},
        [Ports.B]: {[Ports.A]: false},
        [Ports.A + Ports.B]: {[Ports.A]: true}
    }

    protected listInputs(): void {
        this.inputs.add(Ports.A);
        this.inputs.add(Ports.B);
    }
    protected listOutputs(): void {
        this.outputs.add(Ports.A);
    }

    public getInputs(): Ports[] {
        return [...this.inputs.values()];
    }

    public getOutputs(): Ports[] {
        return [...this.outputs.values()];
    }

    public eval(inputs: PortMap): PortMap {
        // TODO: validate inputs
        const inp = Object.keys(inputs)
            .filter((key) => inputs[Number(key) as Ports])
            .reduce((acc, val) => acc + Number(val), 0)
        // TODO: validate truth table result exists
        // @ts-ignore
        return this.truthTable[inp];
    }
}
