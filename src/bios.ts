export class BIOS {
    constructor() {
        console.log("BIOS init...");
    }

    public log(text: string): void {
        // must track VGA status and stop producing output after its init.
        console.log(text);
    }

    public crash(text: string): void {
        this.log("[CRITICAL] System crashed!!!");
        throw new Error(text);
    }
}
