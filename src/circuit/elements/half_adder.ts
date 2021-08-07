import {Element, AND, XOR, BUF} from "logic-board";

export class HalfAdder extends Element {
    protected formBoard() {
        this.addElement("input1", new BUF());
        this.addElement("input2", new BUF());
        this.addElement("and1", new AND());
        this.addElement("xor1", new XOR());
        this.addConnection("input1", 0, "and1", 0);
        this.addConnection("input1", 0, "xor1", 0);
        this.addConnection("input2", 0, "and1", 1);
        this.addConnection("input2", 0, "xor1", 1);
        this.addInput(0, "input1", 0);
        this.addInput(1, "input2", 0);
        this.addOutput(0, "xor1", 0); // sum
        this.addOutput(1, "and1", 0); // carry
    }
}
