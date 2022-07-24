import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7jujK28H1g2xt1gtIGMHdmIwh3Fz_JQU",
    authDomain: "linkedin-clone-2fc2c.firebaseapp.com",
    projectId: "linkedin-clone-2fc2c",
    storageBucket: "linkedin-clone-2fc2c.appspot.com",
    messagingSenderId: "317213297519",
    appId: "1:317213297519:web:5c35129a43e9687ca8369a",
    measurementId: "G-9HCDRT09R0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};