const jwt = require('jsonwebtoken');
const secret = process.env.AUTH_SECRET;

const withAuth = function (req, res, next) {
    const token = req.headers.auth_token;

    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                req.role = decoded.role;
                next();
            }
        });
    }
}

module.exports = withAuth;