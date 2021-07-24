import {Port} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

export class AND extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Port.A]: false},
        [Port.A]: {[Port.A]: false},
        [Port.B]: {[Port.A]: false},
        [Port.A + Port.B]: {[Port.A]: true}
    }

    protected listInputs(): void {
        this.inputs.add(Port.A);
        this.inputs.add(Port.B);
    }

    protected listOutputs(): void {
        this.outputs.add(Port.A);
    }

}
