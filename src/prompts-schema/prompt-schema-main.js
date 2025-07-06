import chalk from "chalk";

//Constant that will store the prompt settings for selecting the tool
const prompt_schema_main = [
    {
        name: "select",
        description: chalk.yellow.bold("Select a tool:") + chalk.blue.italic("\n1 - QRCODE\n2 - PASSWORD") + chalk.yellow.bold("\nSelect the tool by typing the correspondent number"),
        pattern: /^[1-2]+$/,
        message: chalk.redBright("Type a number to select the tool"),
        require: true,
    }
]

export default prompt_schema_main;