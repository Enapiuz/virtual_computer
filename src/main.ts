import {RAM} from "./memory/ram";
import {BIOS} from "./bios";

(async function () {
    const bios = new BIOS();
    // Maybe there should be a kind of serial/central bus?
    // which CPU and RAM will be use to communicate.

    // init RAM
    const ram = new RAM(bios, 1024*1024);
    ram.init();
    // init CPU
    // init VGA (???)
    // init storage
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
