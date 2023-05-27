import firebaseAdmin from 'firebase-admin';
import getSecretKey from "../utils/secretManager.js";

const firebaseApp = await firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(JSON.parse(await getSecretKey('FIREBASE_KEY')))
});

export default firebaseApp;

