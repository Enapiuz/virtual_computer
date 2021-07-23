import {Ports} from "../basic";
import {LogicBlock, TruthTable} from "../logic_block";

export class OR extends LogicBlock {
    protected readonly truthTable: TruthTable = {
        [0]: {[Ports.A]: false},
        [Ports.A]: {[Ports.A]: true},
        [Ports.B]: {[Ports.A]: true},
        [Ports.A + Ports.B]: {[Ports.A]: true}
    }

    protected listInputs(): void {
        this.inputs.add(Ports.A);
        this.inputs.add(Ports.B);
    }

    protected listOutputs(): void {
        this.outputs.add(Ports.A);
    }

}