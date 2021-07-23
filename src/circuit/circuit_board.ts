import {Basic, PortMap, Ports} from "./basic";
import {AND} from "./and";
import {XOR} from "./xor";
import {PASS} from "./pass";

export type ElementWithState = {
    element: Basic;
    inputState: PortMap;
    outputState: PortMap;
}

export type Connection = {
    srcName: string;
    srcOutput: Ports;
    dstName: string;
    dstInput: Ports;
}

export type IOPort = {
    elementName: string;
    elementPort: Ports;
}

export class CircuitBoard {
    private elements: Map<string, ElementWithState> = new Map();
    private connections: Array<Connection> = [];

    private inputs: Map<Ports, IOPort> = new Map();
    private outputs: Map<Ports, IOPort> = new Map();

    constructor() {
        this.formBoard();
    }

    private addElement(name: string, element: Basic): void {
        this.elements.set(name, {
            element,
            inputState: {},
            outputState: {}
        });
    }

    private addConnection(srcName: string, srcOutput: Ports, dstName: string, dstInput: Ports): void {
        this.connections.push({srcName, srcOutput, dstName, dstInput});
    }

    private addInput(externalPort: Ports, elementName: string, elementPort: Ports): void {
        this.inputs.set(externalPort, {
            elementName,
            elementPort
        });
    }

    private addOutput(externalPort: Ports, elementName: string, elementPort: Ports): void {
        this.outputs.set(externalPort, {
            elementName,
            elementPort
        });
    }

    protected formBoard(): void {
        this.addElement("and1", new AND());
        this.addElement("xor1", new XOR());
        this.addElement("input1", new PASS());
        this.addElement("input2", new PASS());
        this.addConnection("input1", Ports.A, "and1", Ports.A);
        this.addConnection("input1", Ports.A, "xor1", Ports.A);
        this.addConnection("input2", Ports.A, "and1", Ports.B);
        this.addConnection("input2", Ports.A, "xor1", Ports.B);
        this.addInput(Ports.A, "input1", Ports.A);
        this.addInput(Ports.B, "input2", Ports.A);
        this.addOutput(Ports.A, "xor1", Ports.A); // sum
        this.addOutput(Ports.B, "and1", Ports.A); // carry
    }

    private resetState(): void {
        [...this.elements.keys()].forEach((elementName) => {
            (this.elements.get(elementName) as ElementWithState).inputState = {};
            (this.elements.get(elementName) as ElementWithState).outputState = {};
        });
    }

    public eval(inputs: PortMap): PortMap {
        // reset state
        this.resetState();

        // init queue, such a complicated thing
        const q: string[] = [];

        // map to avoid enqueueing elements more than once
        const qmap = new Set<string>();

        // getting input elements
        // and initialising inputState of input elements
        [...this.inputs.keys()].forEach((inputPort) => {
            // inputPort - exact input Port which receives some value on board
            // ioPort.elementPort - port on element to assign input value to
            // ioPort.elementName - to which element assign input value
            const ioPort = this.inputs.get(inputPort) as IOPort;
            // TODO: validate if input exists
            const inputValue = inputs[inputPort] as boolean;
            const inputElement = this.elements.get(ioPort.elementName) as ElementWithState;
            inputElement.inputState[ioPort.elementPort] = inputValue;
            // enqueue input elements to calculate outputs
            q.push(ioPort.elementName);
            qmap.add(ioPort.elementName);
        });

        // kinda BFS on out graph of elements
        while(q.length > 0) {
            // calculate element's output state
            const elementName = q.shift() as string;
            const element = this.elements.get(elementName) as ElementWithState;
            element.outputState = element.element.eval(element.inputState);

            // propagate element's output to its connections
            this.connections
                .filter((connection) => connection.srcName === elementName)
                .forEach((connection) => {
                    const dstElement = this.elements.get(connection.dstName) as ElementWithState;
                    dstElement.inputState[connection.dstInput] = element.outputState[connection.srcOutput];
                    // enqueue connections
                    if (!qmap.has(connection.dstName)) {
                        q.push(connection.dstName);
                        qmap.add(connection.dstName);
                    }
                })
        }

        const result: PortMap = {};
        // find output elements and return their state
        [...this.outputs.keys()].forEach((outputPort) => {
           // outputPort - name of the board's output
            const ioPort = this.outputs.get(outputPort) as IOPort;
            const element = this.elements.get(ioPort.elementName) as ElementWithState;
            result[outputPort] = element.outputState[ioPort.elementPort];
        });

        return result;
    }
}
