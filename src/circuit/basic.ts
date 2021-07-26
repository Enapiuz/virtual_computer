export type Port =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31;

export type PortMap = Map<Port, boolean>;

export abstract class Basic {
    // For automatic input validation purposes
    public abstract getInputPorts(): Port[];

    // For automatic output validation purposes
    public abstract getOutputPorts(): Port[];

    // Place something in, get something out
    public abstract eval(inputs: PortMap): PortMap;
}
