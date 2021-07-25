import {Port} from "../basic";
import {Element} from "../element";
import {BUF} from "../elements/buf";
import {HalfAdder} from "./half_adder";
import {OR} from "../elements/or";

export class Adder extends Element {
    protected formBoard(): void {
        // all needed elements
        this.addElement("A", new BUF());
        this.addElement("B", new BUF());
        this.addElement("carryIn", new BUF());
        this.addElement("ha0", new HalfAdder());
        this.addElement("ha1", new HalfAdder());
        this.addElement("or0", new OR());

        // connect external inputs
        this.addInput(Port.A, "A", Port.A);
        this.addInput(Port.B, "B", Port.A);
        this.addInput(Port.C, "carryIn", Port.A);

        // connect internal inputs
        this.addConnection("A", Port.A, "ha0", Port.A);
        this.addConnection("B", Port.A, "ha0", Port.B);
        this.addConnection("carryIn", Port.A, "ha1", Port.A);

        // connect elements
        this.addConnection("ha0", Port.A, "ha1", Port.B);
        this.addConnection("ha0", Port.B, "or0", Port.B);
        this.addConnection("ha1", Port.B, "or0", Port.A);

        // define outputs
        this.addOutput(Port.A, "ha1", Port.A);
        this.addOutput(Port.B, "or0", Port.A);
    }
}
