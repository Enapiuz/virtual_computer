import {Port} from "../basic";
import {CircuitBoard} from "../circuit_board";
import {BUF} from "../elements/buf";
import {HalfAdder} from "./half_adder";
import {OR} from "../elements/or";

export class Adder extends CircuitBoard {
    protected formBoard(): void {
        // all needed elements
        this.addElement("carryIn", new BUF());
        this.addElement("P", new BUF());
        this.addElement("Q", new BUF());
        this.addElement("ha0", new HalfAdder());
        this.addElement("ha1", new HalfAdder());
        this.addElement("or0", new OR());

        // connect external inputs
        this.addInput(Port.A, "carryIn", Port.A);
        this.addInput(Port.B, "P", Port.A);
        this.addInput(Port.C, "Q", Port.A);

        // connect internal inputs
        this.addConnection("carryIn", Port.A, "ha0", Port.A);
        this.addConnection("P", Port.A, "ha1", Port.A);
        this.addConnection("Q", Port.A, "ha1", Port.B);

        // connect elements
        this.addConnection("ha1", Port.A, "ha0", Port.B);
        this.addConnection("ha1", Port.B, "or0", Port.B);
        this.addConnection("ha0", Port.B, "or0", Port.A);

        // define outputs
        this.addOutput(Port.A, "ha0", Port.A);
        this.addOutput(Port.B, "or0", Port.A);
    }
}
