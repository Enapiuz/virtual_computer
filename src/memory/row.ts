import {Cell} from "./cell";

export class Row {
    protected row: Cell[];

    constructor() {
        this.row = Array(16)
            .fill(undefined)
            .map(() => new Cell());
    }

    public write(row: boolean[]) {
        for (let i = 0; i < 16; i++) {
            row[i] ? this.row[i].set1() : this.row[i].set0();
        }
    }

    public read(): boolean[] {
        return this.row.map((cell) => cell.get());
    }
}
