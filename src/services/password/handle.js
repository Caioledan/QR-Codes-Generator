import permittedCharacters from "./utils/permittedCharacters.js";

// Function that will make the password following the logic of the config
async function handle() {
    let characters = await permittedCharacters();
    let password = "";

    const password_length = process.env.PASSWORD_LENGTH;

    for (let i = 0; i < password_length; i++){
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }

    return password;
}

export default handle;