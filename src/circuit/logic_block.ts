import {Basic, PortMap, Ports} from "./basic";

export type TruthTable = {
    [key in Ports | 0]?: {[key in Ports]?: boolean};
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

    constructor() {
        super();
        // TODO: validate truth table
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
