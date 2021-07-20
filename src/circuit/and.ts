import {Basic, Ports, TruthTable} from "./basic";

export class AND extends Basic {
    protected readonly truthTable: TruthTable = {
        [0]: {[Ports.A]: false},
        [Ports.A]: {[Ports.A]: false},
        [Ports.B]: {[Ports.A]: false},
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
