import {Basic, PortMap, Port} from "./basic";

export type ElementWithState = {
    element: Basic;
    inputState: PortMap;
    outputState: PortMap;
}

export type Connection = {
    srcName: string;
    srcOutput: Port;
    dstName: string;
    dstInput: Port;
}

export type IOPort = {
    elementName: string;
    elementPort: Port;
}

export abstract class Element extends Basic {
    private elements: Map<string, ElementWithState> = new Map();
    private connections: Array<Connection> = [];

    private inputs: Map<Port, IOPort> = new Map();
    private outputs: Map<Port, IOPort> = new Map();

    constructor() {
        super();
        this.formBoard();
        // TODO: validate connections
    }

    protected addElement(name: string, element: Basic): void {
        this.elements.set(name, {
            element,
            inputState: {},
            outputState: {}
        });
    }

    protected addConnection(srcName: string, srcOutput: Port, dstName: string, dstInput: Port): void {
        this.connections.push({srcName, srcOutput, dstName, dstInput});
    }

    protected addInput(externalPort: Port, elementName: string, elementPort: Port): void {
        this.inputs.set(externalPort, {
            elementName,
            elementPort
        });
    }

    protected addOutput(externalPort: Port, elementName: string, elementPort: Port): void {
        this.outputs.set(externalPort, {
            elementName,
            elementPort
        });
    }

    // Where to create and connect all the elements
    protected abstract formBoard(): void;

    private resetState(): void {
        [...this.elements.keys()].forEach((elementName) => {
            (this.elements.get(elementName) as ElementWithState).inputState = {};
            (this.elements.get(elementName) as ElementWithState).outputState = {};
        });
    }

    public getInputPorts(): Port[] {
        return [...this.inputs.keys()];
    }

    public getOutputPorts(): Port[] {
        return [...this.outputs.keys()];
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

            // check if current element has enough input data
            const requiredInputSlots = element.element.getInputPorts().map(Number).sort();
            const filledInputSlots = Object.keys(element.inputState).map(Number).sort();
            if (requiredInputSlots.length !== filledInputSlots.length) {
                q.push(elementName);
                continue;
            }
            let checkFailed = false;
            for (let i = 0; i < requiredInputSlots.length; i++) {
                if (requiredInputSlots[i] !== filledInputSlots[i]) {
                    q.push(elementName);
                    checkFailed = true;
                    break;
                }
            }
            if (checkFailed) {
                q.push(elementName);
                continue;
            }

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
