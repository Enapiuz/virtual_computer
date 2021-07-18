export type TruthTable = {
    [key: string]: number
}

// TODO: define input and output ports and define truth table
abstract class AbstractMachine {
    protected static currentId = 0;

    protected id: number;

    protected abstract truthTable: number;

    protected static generateMachineId(): number {
        return ++AbstractMachine.currentId;
    }

    protected constructor() {
        this.id = AbstractMachine.generateMachineId();
    }

    // TODO: types here
    public abstract getInputs(): any[];
    public abstract getOutputs(): any[];

    public getId(): String {
        return this.toString();
    }

    public toString(): String {
        return String(this.id);
    }

    public calculateOutput(inputs: []) {

    }
}
