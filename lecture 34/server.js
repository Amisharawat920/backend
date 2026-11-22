const jwt = require('jsonwebtoken');

const data = {
    _id: "6aeb6a615bebbf99e883223d"
}

const token = jwt.sign(data, "nhi batauga secret key hh", { expiresIn: "2d" });
console.log("Token:", token);

const decoded = jwt.verify(token, "nhi batauga secret key hh");
console.log("Decoded:", decoded);