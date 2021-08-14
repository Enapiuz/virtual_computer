import {Element, gate} from "logic-board";

export class HalfAdder extends Element {
    protected formBoard() {
        this.addElement("input1", gate.BUF());
        this.addElement("input2", gate.BUF());
        this.addElement("and1", gate.AND());
        this.addElement("xor1", gate.XOR());
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
