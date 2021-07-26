import {Port} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

// Crutch to pass input to multiple other elements
export class BUF extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Port.P0]: false},
        [Port.P0]: {[Port.P0]: true}
    }

    protected listInputs(): void {
        this.inputs.add(Port.P0);
    }

    protected listOutputs(): void {
        this.outputs.add(Port.P0);
    }

}
