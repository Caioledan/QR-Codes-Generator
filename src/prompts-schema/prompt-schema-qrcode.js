import chalk from "chalk";

// Constants that will store the prompt settings for inserting the link and for choosing the way to receive QRCode
const prompt_schema_QRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Enter the link to get the QRCode"),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Choose between the type of QRCode:") + chalk.blueBright("\n1 - Terminal\n2 - Image") + chalk.yellow.bold("\nChoose the type by typing the correspondent number"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Type a number to select the type of QRCode"),
        required: true,
    }
];

export default prompt_schema_QRCode;