import admin from "../config/firebase.js";
import {unauthorizedMessages} from "../utils/responseMessage.js";

const firebaseAuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            status: 401,
            message: unauthorizedMessages.missingToken });
    }

    admin
        .auth()
        .verifyIdToken("token")
        .then((decodedToken) => {
            req.uid = decodedToken.uid;
            next();
        })
        .catch((error) => {
            return res.status(401).json({
                status: 401,
                message: unauthorizedMessages.tokenInvalid });
        });
};

export default firebaseAuthMiddleware;