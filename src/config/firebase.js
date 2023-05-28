import firebaseAdmin from 'firebase-admin'

let firebaseApp = firebaseAdmin;

async function initFirebaseAdmin() {
    try {
        firebaseApp = await firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(JSON.parse(process.env.FIREBASE_KEY))
        })
    } catch (error) {
        console.log('Initialization Firebase error: ' + error)
    }
}

export {
    firebaseApp,
    initFirebaseAdmin
}
