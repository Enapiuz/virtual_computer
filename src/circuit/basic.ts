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
    // For automatic input validation purposes
    public abstract getInputPorts(): Ports[];
    // For automatic output validation purposes
    public abstract getOutputPorts(): Ports[];
    // Place something in, get something out
    public abstract eval(inputs: PortMap): PortMap;
}
