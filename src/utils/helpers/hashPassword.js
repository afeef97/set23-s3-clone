import bcrypt from "bcryptjs";

function hashPassword(password, round = 10) {
    const salt = bcrypt.genSaltSync(round);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

export default hashPassword;
