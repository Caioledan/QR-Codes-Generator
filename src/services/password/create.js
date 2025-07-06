import chalk from "chalk";
import handle from "./handle.js";

/// Function that will create the password, calling handle function
async function createPassword() {
    console.log(chalk.green("password"));
    const password = await handle();
    console.log(password);
}

export default createPassword;