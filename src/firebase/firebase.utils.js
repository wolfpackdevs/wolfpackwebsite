import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCXjdnKl2MYrBP4op9IHgfmkP3V1X-PJUY",
    authDomain: "wolfpacksite-9b453.firebaseapp.com",
    projectId: "wolfpacksite-9b453",
    storageBucket: "wolfpacksite-9b453.appspot.com",
    messagingSenderId: "605502541502",
    appId: "1:605502541502:web:0acf4d5a17bcc9792958ef",
    measurementId: "G-J2NBMHLCJL"
    };
firebase.initializeApp(config);

// adding the auth object to the firestore db
export const createUserProfileDocument = async (userAuth, otherData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createdDate = new Date();
        const admin = false;

        try {
            await userRef.set({
                displayName, email, createdDate, admin, ...otherData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({pormpt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

