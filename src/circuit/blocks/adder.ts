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
        this.addInput(Port.P0, "A", Port.P0);
        this.addInput(Port.P1, "B", Port.P0);
        this.addInput(Port.P2, "carryIn", Port.P0);

        // connect internal inputs
        this.addConnection("A", Port.P0, "ha0", Port.P0);
        this.addConnection("B", Port.P0, "ha0", Port.P1);
        this.addConnection("carryIn", Port.P0, "ha1", Port.P0);

        // connect elements
        this.addConnection("ha0", Port.P0, "ha1", Port.P1);
        this.addConnection("ha0", Port.P1, "or0", Port.P1);
        this.addConnection("ha1", Port.P1, "or0", Port.P0);

        // define outputs
        this.addOutput(Port.P0, "ha1", Port.P0);
        this.addOutput(Port.P1, "or0", Port.P0);
    }
}
