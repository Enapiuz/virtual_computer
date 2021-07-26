import {LogicBlock, TruthTable} from "../logic_block";

// Crutch to pass input to multiple other elements
export class BUF extends LogicBlock {
    protected readonly truthTable: TruthTable = [
        {in: [], out: new Map([[0, false]])},
        {in: [0], out: new Map([[0, true]])},
    ]

    protected listInputs(): void {
        this.inputs.add(0);
    }

    protected listOutputs(): void {
        this.outputs.add(0);
    }

}
