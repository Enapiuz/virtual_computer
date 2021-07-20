import {Basic, PortMap, Ports} from "./basic";
import {AND} from "./and";

export type Connection = {
    srcName: string;
    srcOutput: Ports;
    dstName: string;
    dstInput: Ports;
}

export class CircuitBoard extends Basic{
    private elements: Map<string, Basic> = new Map();
    private connections: Array<Connection> = [];

    public addElement(name: string, element: Basic): void {
        this.elements.set(name, element);
    }

    public addConnection(srcName: string, srcOutput: Ports, dstName: string, dstInput: Ports): void {
        this.connections.push({srcName, srcOutput, dstName, dstInput});
    }

    protected formBoard(): void {
        this.addElement("and1", new AND());
        this.addElement("and2", new AND());
        this.addConnection("and1", Ports.A, "and2", Ports.A);
    }

    protected listInputs(): void {
    }

    protected listOutputs(): void {
    }

    eval(inputs: PortMap): PortMap {
        return {};
    }
}
