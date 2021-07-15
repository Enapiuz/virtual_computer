import {BIOS} from "./bios";

export interface BusEvent {
    name: string;
    data: any;
}

// Super stupid pub/sub
export class Bus {
    protected subscribers = new Map<string, Function>();

    constructor(protected readonly bios: BIOS, protected readonly name: string) {
        this.bios.log(`${this.name} bus init...`);
    }

    public subscribe(subscriberName: string, cb: Function) {
        if (this.subscribers.has(subscriberName)) {
            this.bios.crash(`Subscriber ${subscriberName} already exists.`)
        }
        this.subscribers.set(subscriberName, cb);
    }

    public publish(senderName: string, event: BusEvent) {
        for (const [name, subscriber] of this.subscribers) {
            // do not send event to sender
            if (name !== senderName) {
                subscriber(senderName, event);
            }
        }
    }
}
