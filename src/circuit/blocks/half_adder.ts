import {Element} from "../element";
import {AND} from "../elements/and";
import {XOR} from "../elements/xor";
import {BUF} from "../elements/buf";
import {Port} from "../basic";

export class HalfAdder extends Element {
    protected formBoard() {
        this.addElement("input1", new BUF());
        this.addElement("input2", new BUF());
        this.addElement("and1", new AND());
        this.addElement("xor1", new XOR());
        this.addConnection("input1", Port.P0, "and1", Port.P0);
        this.addConnection("input1", Port.P0, "xor1", Port.P0);
        this.addConnection("input2", Port.P0, "and1", Port.P1);
        this.addConnection("input2", Port.P0, "xor1", Port.P1);
        this.addInput(Port.P0, "input1", Port.P0);
        this.addInput(Port.P1, "input2", Port.P0);
        this.addOutput(Port.P0, "xor1", Port.P0); // sum
        this.addOutput(Port.P1, "and1", Port.P0); // carry
    }
}
