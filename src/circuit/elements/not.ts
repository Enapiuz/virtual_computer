import {Port} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

// Crutch to pass input to multiple other elements
export class NOT extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Port.P0]: true},
        [Port.P0]: {[Port.P0]: false}
    }

    protected listInputs(): void {
        this.inputs.add(Port.P0);
    }

    protected listOutputs(): void {
        this.outputs.add(Port.P0);
    }

}
