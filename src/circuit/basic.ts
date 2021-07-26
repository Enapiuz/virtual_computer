export enum Port {
    P0 = 1,
    P1 = 1 << 1,
    P2 = 1 << 2,
    P3 = 1 << 3,
    P4 = 1 << 4,
    P5 = 1 << 5,
    P6 = 1 << 6,
    P7 = 1 << 7,
    P8 = 1 << 8,
    P9 = 1 << 9,
    P10 = 1 << 10,
    P11 = 1 << 11,
    P12 = 1 << 12,
    P13 = 1 << 13,
    P14 = 1 << 14,
    P15 = 1 << 15,
    P16 = 1 << 16,
    P17 = 1 << 17,
    P18 = 1 << 18,
    P19 = 1 << 19,
    P20 = 1 << 20,
    P21 = 1 << 21,
    P22 = 1 << 22,
    P23 = 1 << 23,
    P24 = 1 << 24,
    P25 = 1 << 25,
    P26 = 1 << 26,
    P27 = 1 << 27,
    P28 = 1 << 28,
    P29 = 1 << 29,
    P30 = 1 << 30,
    P31 = 1 << 31,
}

export type PortMap = {
    [key in Port]?: boolean;
}

export abstract class Basic {
    // For automatic input validation purposes
    public abstract getInputPorts(): Port[];
    // For automatic output validation purposes
    public abstract getOutputPorts(): Port[];
    // Place something in, get something out
    public abstract eval(inputs: PortMap): PortMap;
}
