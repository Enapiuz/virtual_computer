import {CircuitBoard} from "../circuit_board";
import {AND} from "../elements/and";
import {XOR} from "../elements/xor";
import {BUF} from "../elements/buf";
import {Port} from "../basic";

export class HalfAdder extends CircuitBoard {
    protected formBoard() {
        this.addElement("input1", new BUF());
        this.addElement("input2", new BUF());
        this.addElement("and1", new AND());
        this.addElement("xor1", new XOR());
        this.addConnection("input1", Port.A, "and1", Port.A);
        this.addConnection("input1", Port.A, "xor1", Port.A);
        this.addConnection("input2", Port.A, "and1", Port.B);
        this.addConnection("input2", Port.A, "xor1", Port.B);
        this.addInput(Port.A, "input1", Port.A);
        this.addInput(Port.B, "input2", Port.A);
        this.addOutput(Port.A, "xor1", Port.A); // sum
        this.addOutput(Port.B, "and1", Port.A); // carry
    }
}
