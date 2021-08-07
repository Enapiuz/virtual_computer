import {Element, Port, BUF} from "logic-board";
import {Adder} from "./adder";

export class Adder16 extends Element {
    protected formBoard() {
        for (let i = 0; i < 16; i++) {
            this.addElement(`inp${i}`, new BUF()); // first num
            this.addElement(`inp${i + 16}`, new BUF()); // second num

            this.addInput(i as Port, `inp${i}`, 0);
            this.addInput((i + 16) as Port, `inp${i + 16}`, 0);

            this.addElement(`add${i}`, new Adder());

            this.addConnection(`inp${i}`, 0, `add${i}`, 0);
            this.addConnection(`inp${i + 16}`, 0, `add${i}`, 1);

            if (i > 0) {
                this.addConnection(`add${i}`, 1, `add${i - 1}`, 2);
            }
            this.addOutput(i as Port, `add${i}`, 0);
        }
        // Abandoned carry in
        this.prefillValue("add15", 2, false);
    }
}
