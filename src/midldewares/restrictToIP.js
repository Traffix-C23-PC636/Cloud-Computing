// customMiddleware.js

const allowedIPs = ['34.128.77.40', '127.0.0.1', 'localhost', '::1']; // Array of allowed IP addresses

const restrictToIP = (req, res, next) => {
    const requestIP = req.ip;

    if (allowedIPs.includes(requestIP)) {
        next(); // Continue to the next handler if the IP is allowed
    } else {
        res.status(403).json({error: 'Forbidden'});
    }
};

export default restrictToIP;
