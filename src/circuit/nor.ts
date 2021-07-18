import {Element} from "./element";

export class Nor extends Element {
    protected formCircuit(): void {
        this.addTransistor("tr1");
        this.addTransistor("tr2");
        this.setForeverInputValue("tr1", 0, true);
        this.connect("tr1", "tr2", 1);
        this.setElementInput("", 1);
    }
}
