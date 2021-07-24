import {Basic, PortMap, Port} from "./basic";

export type TruthTable = {
    [key in Port | 0]?: {[key in Port]?: boolean};
}

export abstract class LogicBlock extends Basic {
    /**
     * Example AND:
     * {
     *   [0]: {[Ports.A]: false},
     *   [Ports.A]: {[Ports.A]: false},
     *   [Ports.B]: {[Ports.A]: false},
     *   [Ports.A + Ports.B]: {[Ports.A]: true}
     * }
     * @protected
     */
    protected abstract readonly truthTable: TruthTable;

    protected inputs: Set<Port> = new Set();
    protected outputs: Set<Port> = new Set();

    constructor() {
        super();
        this.listInputs();
        this.listInputs();
        // TODO: validate truth table
    }

    protected abstract listInputs(): void;
    protected abstract listOutputs(): void;

    public getInputPorts(): Port[] {
        return [...this.inputs.values()];
    }

    public getOutputPorts(): Port[] {
        return [...this.outputs.values()];
    }

    public eval(inputs: PortMap): PortMap {
        // TODO: validate inputs
        const inp = Object.keys(inputs)
            .filter((key) => inputs[Number(key) as Port])
            .reduce((acc, val) => acc + Number(val), 0)
        // TODO: validate truth table result exists
        // @ts-ignore
        return this.truthTable[inp];
    }
}
