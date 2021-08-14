import fs from "fs";
import path from "path";
import {Basic, Element, gate} from "logic-board";
import yaml from "js-yaml";

export class ChipBuilder {
    protected indludePaths: string[] = [];
    knownElements = new Map<string, ElementCreator>();

    constructor() {
        this.loadBasicElements();
    }

    public buildFromYamlFile(filename: string): Element {
        const data = fs.readFileSync(path.resolve(filename), "utf-8");
        return this.buildFromYaml(data, "./");
    }

    public buildFromYaml(yml: string, rootDir: string): Element {
        const obj: Chip = yaml.load(yml) as Chip;
        const knownElements = this.knownElements;
        return new (class extends Element {
            public formBoard() {
                obj.elements.forEach((elem) => {
                    console.log(knownElements);
                    this.addElement(
                        elem.name,
                        (knownElements.get(elem.type) as ElementCreator)()
                    );
                });
            }
        })();
    }

    protected loadBasicElements() {
        this.knownElements.set("AND", () => gate.AND());
        this.knownElements.set("OR", () => gate.OR());
        this.knownElements.set("XOR", () => gate.XOR());
    }
}

export type ElementCreator = () => Basic;

export type InputDescription = {
    element: string;
    port: number;
};

export type OutputDescription = {
    element: string;
    port: number;
};

export type ElementDescription = {
    type: string;
    name: string;
};

export type ConnectionDescription = {
    from: {element: string; port: number};
    to: {element: string; port: number};
};

export type Chip = {
    chip: string;
    inputs: {[key: number]: InputDescription[]};
    elements: ElementDescription[];
    connections: ConnectionDescription[];
    outputs: {[key: number]: OutputDescription[]};
};
