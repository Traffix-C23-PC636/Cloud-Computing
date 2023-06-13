// customMiddleware.js


const restrictToIP = (req, res, next) => {
    const allowedIPs = process.env.ALLOWED_IP// Array of allowed IP addresses
    const requestIP = req.ip;

    if (allowedIPs.includes(requestIP)) {
        next(); // Continue to the next handler if the IP is allowed
    } else {
        res.status(403).json({error: 'Forbidden'});
    }
};

export default restrictToIP;
