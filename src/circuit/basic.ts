export enum Ports {
    A = 1,
    B = 1 << 1,
    C = 1 << 2,
    D = 1 << 3,
    E = 1 << 4,
    F = 1 << 5,
    G = 1 << 6,
    H = 1 << 7,
    I = 1 << 8,
    J = 1 << 9,
    K = 1 << 10,
    L = 1 << 11,
    M = 1 << 12,
    N = 1 << 13,
    O = 1 << 14,
    P = 1 << 15,
}

export type PortMap = {
    [key in Ports]?: boolean;
}


export abstract class Basic {
    protected inputs: Set<Ports> = new Set();
    protected outputs: Set<Ports> = new Set();

    constructor() {
        this.listInputs();
        this.listOutputs();
    }

    /**
     * Add element inputs here.
     */
    protected abstract listInputs(): void;

    /**
     * Add element outputs here.
     */
    protected abstract listOutputs(): void;

    public getInputs(): Ports[] {
        return [...this.inputs.values()];
    }

    public getOutputs(): Ports[] {
        return [...this.outputs.values()];
    }

    public abstract eval(inputs: PortMap): PortMap;
}
