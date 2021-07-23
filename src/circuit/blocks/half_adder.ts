import {CircuitBoard} from "../circuit_board";
import {AND} from "../elements/and";
import {XOR} from "../elements/xor";
import {PASS} from "../elements/pass";
import {Ports} from "../basic";

export class HalfAdder extends CircuitBoard {
    protected formBoard() {
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
}
