import {Element, gate} from "logic-board";
import {HalfAdder} from "./half_adder";

export class Adder extends Element {
    protected formBoard(): void {
        // all needed elements
        this.addElement("A", gate.BUF());
        this.addElement("B", gate.BUF());
        this.addElement("carryIn", gate.BUF());
        this.addElement("ha0", new HalfAdder());
        this.addElement("ha1", new HalfAdder());
        this.addElement("or0", gate.OR());

        // connect external inputs
        this.addInput(0, "A", 0);
        this.addInput(1, "B", 0);
        this.addInput(2, "carryIn", 0);

        // connect internal inputs
        this.addConnection("A", 0, "ha0", 0);
        this.addConnection("B", 0, "ha0", 1);
        this.addConnection("carryIn", 0, "ha1", 0);

        // connect elements
        this.addConnection("ha0", 0, "ha1", 1);
        this.addConnection("ha0", 1, "or0", 1);
        this.addConnection("ha1", 1, "or0", 0);

        // define outputs
        this.addOutput(0, "ha1", 0); // sum
        this.addOutput(1, "or0", 0); // carry out
    }
}
