import {RAM} from "./memory/ram";
import {BIOS} from "./bios";

(async function () {
    const bios = new BIOS();

    // there must be a kind of BIOS?
    // init RAM
    const ram = new RAM(bios, 1024*1024);
    // init CPU
    // init VGA (???)
    // init storage
})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
