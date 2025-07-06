import prompt from "prompt";
import prompt_schema_QRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

// Function to create the QRCode using the handle function
async function createQRCode() {
    prompt.get(prompt_schema_QRCode, handle)

    prompt.start()
}

export default createQRCode;