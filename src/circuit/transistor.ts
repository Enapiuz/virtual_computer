export class Transistor {
    public static readonly Emitter = 0;
    public static readonly Base = 1;
    public static readonly Collector = 2;

    public eval(input1: boolean, input2: boolean): boolean {
        return input1 && input2;
    }
}

export class TransistorNeg {
    public eval(input1: boolean, input2: boolean): boolean {
        return false;
    }
}
