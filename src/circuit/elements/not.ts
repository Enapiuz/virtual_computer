import {Ports} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

// Crutch to pass input to multiple other elements
export class NOT extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Ports.A]: true},
        [Ports.A]: {[Ports.A]: false}
    }

    protected listInputs(): void {
        this.inputs.add(Ports.A);
    }

    protected listOutputs(): void {
        this.outputs.add(Ports.A);
    }

}
