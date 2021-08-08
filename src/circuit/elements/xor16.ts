import {Element, XOR} from "logic-board";

export class Xor16 extends Element {
    protected formBoard(): void {
        for (let i = 0; i < 16; i++) {
            this.addElement(`xor${i}`, new XOR());
            this.addInput(i, `xor${i}`, 0);
            this.addInput(i + 16, `xor${i}`, 1);
            this.addOutput(i, `xor${i}`, 0);
        }
    }
}
