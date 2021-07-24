import {Port} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

// Crutch to pass input to multiple other elements
export class PASS extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Port.A]: false},
        [Port.A]: {[Port.A]: true}
    }

    protected listInputs(): void {
        this.inputs.add(Port.A);
    }

    protected listOutputs(): void {
        this.outputs.add(Port.A);
    }

}
