import {Port} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

export class XNOR extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Port.P0]: true},
        [Port.P0]: {[Port.P0]: false},
        [Port.P1]: {[Port.P0]: false},
        [Port.P0 + Port.P1]: {[Port.P0]: true}
    }

    protected listInputs(): void {
        this.inputs.add(Port.P0);
        this.inputs.add(Port.P1);
    }

    protected listOutputs(): void {
        this.outputs.add(Port.P0);
    }

}
