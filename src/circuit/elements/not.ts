import {Port} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

// Crutch to pass input to multiple other elements
export class NOT extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Port.A]: true},
        [Port.A]: {[Port.A]: false}
    }

    protected listInputs(): void {
        this.inputs.add(Port.A);
    }

    protected listOutputs(): void {
        this.outputs.add(Port.A);
    }

}
