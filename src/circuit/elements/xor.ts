import {Port} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

export class XOR extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Port.A]: false},
        [Port.A]: {[Port.A]: true},
        [Port.B]: {[Port.A]: true},
        [Port.A + Port.B]: {[Port.A]: false}
    }

    protected listInputs(): void {
        this.inputs.add(Port.A);
        this.inputs.add(Port.B);
    }

    protected listOutputs(): void {
        this.outputs.add(Port.A);
    }

}
