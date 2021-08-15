import {Element, gate, complex} from "logic-board";

/**
 * 16bit memory row
 */
export class MemoryRow16 extends Element {
    protected formBoard() {
        this.addElement("writeMode", gate.BUF());
        this.addInput(16, "writeMode", 0);
        for (let i = 0; i < 16; i++) {
            this.addElement(`data${i}`, gate.BUF());
            this.addElement(`cell${i}`, complex.MemoryCell());

            this.addInput(i, `data${i}`, 0);

            this.addConnection(`data${i}`, 0, `cell${i}`, 0);
            this.addConnection("writeMode", 0, `cell${i}`, 1);

            this.addOutput(i, `cell${i}`, 0);
        }
    }
}
