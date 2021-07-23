import {Ports} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

// Crutch to pass input to multiple other elements
export class PASS extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Ports.A]: false},
        [Ports.A]: {[Ports.A]: true}
    }

    protected listInputs(): void {
        this.inputs.add(Ports.A);
    }

    protected listOutputs(): void {
        this.outputs.add(Ports.A);
    }

}