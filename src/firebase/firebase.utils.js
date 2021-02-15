import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCe2Ctn5qErHuWuIjuL9vHjcQwbfwjA8fw",
    authDomain: "wolf-pack-dev.firebaseapp.com",
    projectId: "wolf-pack-dev",
    storageBucket: "wolf-pack-dev.appspot.com",
    messagingSenderId: "475331438544",
    appId: "1:475331438544:web:fa876b04b0a7c98cd23bd5",
    measurementId: "G-6KDMESMD9C"
    };
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({pormpt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

