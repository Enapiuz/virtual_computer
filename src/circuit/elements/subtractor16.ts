import {Element, BUF, Port} from "logic-board";
import {Adder} from "./adder";
import {Xor16} from "./xor16";

export class Subtractor16 extends Element {
    protected formBoard() {
        this.addElement("subInput", new BUF());
        this.addElement("xor", new Xor16());
        this.addInput(32, "subInput", 0);
        for (let i = 0; i < 16; i++) {
            this.addElement(`inp${i}`, new BUF()); // first num
            this.addElement(`inp${i + 16}`, new BUF()); // second num

            this.addInput(i as Port, `inp${i}`, 0);
            this.addInput((i + 16) as Port, `inp${i + 16}`, 0);

            this.addElement(`add${i}`, new Adder());

            this.addConnection(`inp${i}`, 0, `add${i}`, 0);
            this.addConnection(`inp${i + 16}`, 0, "xor", i);
            this.addConnection("subInput", 0, "xor", i + 16);
            this.addConnection("xor", i, `add${i}`, 1);

            if (i > 0) {
                this.addConnection(`add${i}`, 1, `add${i - 1}`, 2);
            }
            this.addOutput(i as Port, `add${i}`, 0);
        }
        // Add/Sub flag. 0 - add, 1 - sub
        this.addConnection("subInput", 0, "add15", 2);
    }
}
