const bcrypt = require('bcrypt');

const password = "Amisha@1234";
const passwordnew = "Amisha@1234";

const hashPassword = async (password) => {

    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const isMatch = await bcrypt.compare("Amisha@1234", hashedPassword);
    console.log(isMatch);


};

hashPassword(password)
hashPassword(passwordnew);