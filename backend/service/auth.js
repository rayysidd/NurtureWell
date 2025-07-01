const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function setUser(user) {
    return jwt.sign(
        {id: user._id, email: user.email }, 
        secret,
        { expiresIn: '1h' }
    );
};

function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser
};