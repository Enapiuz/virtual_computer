const unums: Uint32Array = new Uint32Array(32);
for (let i = 0; i < 32; i++) {
    unums[i] = 1 << i;
}

export enum Port {
    P0 = unums[0],
    P1 = unums[1],
    P2 = unums[2],
    P3 = unums[3],
    P4 = unums[4],
    P5 = unums[5],
    P6 = unums[6],
    P7 = unums[7],
    P8 = unums[8],
    P9 = unums[9],
    P10 = unums[10],
    P11 = unums[11],
    P12 = unums[12],
    P13 = unums[13],
    P14 = unums[14],
    P15 = unums[15],
    P16 = unums[16],
    P17 = unums[17],
    P18 = unums[18],
    P19 = unums[19],
    P20 = unums[20],
    P21 = unums[21],
    P22 = unums[22],
    P23 = unums[23],
    P24 = unums[24],
    P25 = unums[25],
    P26 = unums[26],
    P27 = unums[27],
    P28 = unums[28],
    P29 = unums[29],
    P30 = unums[30],
    P31 = unums[31],
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
