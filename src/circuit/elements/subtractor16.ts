import {Element, BUF, Port, XOR} from "logic-board";
import {Adder} from "./adder";

export class Subtractor16 extends Element {
    protected formBoard() {
        this.addElement("subInput", new BUF());
        this.addInput(32, "subInput", 0);
        for (let i = 0; i < 16; i++) {
            this.addElement(`inp${i}`, new BUF()); // first num
            this.addElement(`inp${i + 16}`, new BUF()); // second num
            this.addElement(`xor${i + 16}`, new XOR()); // invertor for second num

            this.addInput(i as Port, `inp${i}`, 0);
            this.addInput((i + 16) as Port, `inp${i + 16}`, 0);

            this.addElement(`add${i}`, new Adder());

            this.addConnection(`inp${i}`, 0, `add${i}`, 0);
            this.addConnection(`inp${i + 16}`, 0, `xor${i + 16}`, 0);
            this.addConnection("subInput", 0, `xor${i + 16}`, 1);
            this.addConnection(`xor${i + 16}`, 0, `add${i}`, 1);

            if (i > 0) {
                this.addConnection(`add${i}`, 1, `add${i - 1}`, 2);
            }
            this.addOutput(i as Port, `add${i}`, 0);
        }
        // Add/Sub flag. 0 - add, 1 - sub
        this.addConnection("subInput", 0, "add15", 2);
    }
}
