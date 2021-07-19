import {Transistor} from "./transistor";

export type Connection = {
    sourceName: string;
    destName: string;
    inputNumber: number;
}

export abstract class Element {
    protected transistors: Map<string, Transistor> = new Map<string, Transistor>();
    protected connections: Array<Connection> = [];
    protected elementInputs: Array<{name: string, inputNumber: number}> = [];
    protected elementOutputs: Array<{name: string}> = [];
    protected foreverValues: Array<{name: string, inputNumber: number, value: boolean}> = [];
    protected circuitFormed: boolean = false;

    constructor() {
        this.formCircuit();
        this.validateConnections();
        this.circuitFormed = true;
    }

    protected addTransistor(name: string): void {
        this.transistors.set(name, new Transistor());
    }

    protected connect(sourceName: string, destName: string, inputNumber: number): void {
        this.connections.push({sourceName, destName, inputNumber});
    }

    // here comes all the magic
    protected abstract formCircuit(): void;

    protected setElementInput(name: string, inputNumber: number): void {
        this.elementInputs.push({name, inputNumber});
    }

    protected setElementOutput(name: string): void {
        this.elementOutputs.push({name})
    }

    protected setForeverInputValue(name: string, inputNumber: number, value: boolean): void {
        this.foreverValues.push({name, inputNumber, value});
    }

    private validateConnections(): void {

    }

    public eval(inputs: boolean[]): boolean[] {
        if (!this.circuitFormed) {
            throw new Error("Circuit is not formed");
        }
        // validate inputs
        if (inputs.length !== this.elementInputs.length) {
            throw new Error(`Given inputs != element inputs. ${inputs.length} !== ${this.elementInputs.length}`);
        }
        // go from outputs in non-recursive way
        return [];
    }
}
