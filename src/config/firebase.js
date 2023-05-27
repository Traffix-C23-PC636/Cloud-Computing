import firebaseAdmin from 'firebase-admin';
// import serviceAccount from 'credentials.json'; // lokasi file service credentials firebase

const admin = firebaseAdmin.initializeApp({
    // credential: firebaseAdmin.credential.cert(serviceAccount),
});

export default admin;

