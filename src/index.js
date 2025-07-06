import prompt from "prompt";
import prompt_schema_main from "./prompts-schema/prompt-schema-main.js"
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";


// Main function that will coordinate the logic of the entire application
async function main(){
    prompt.get(prompt_schema_main, async (err, result) => {
        if (result.select == 1) await createQRCode();
        if (result.select == 2) await createPassword();
    })

    prompt.start();
}

main();