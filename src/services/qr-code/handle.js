import qr from "qrcode-terminal"
import chalk from "chalk";

// Function that will generate the QRCode and print it on terminal
async function handle(err, result) {
    if (err){
        console.log(chalk.red.bold("Error on application"));
        return;
    }

    const is_small = result.type == 2;

    qr.generate(result.link, {small: is_small}, (qrcode) => {
        console.log(chalk.green("QRCode successfully generated!"))
        console.log(qrcode);
    })
}

export default handle;