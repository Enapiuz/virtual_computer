export class Cell {
    protected value: boolean = false;

    public set0() {
        this.value = false;
    }

    public set1() {
        this.value = true;
    }

    public get(): boolean {
        return this.value;
    }
}
