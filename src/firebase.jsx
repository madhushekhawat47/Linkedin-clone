import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD89YQKlygePCgl14S2FfxnzjObe-G76UA",
    authDomain: "linkedin-clone-39c38.firebaseapp.com",
    projectId: "linkedin-clone-39c38",
    storageBucket: "linkedin-clone-39c38.appspot.com",
    messagingSenderId: "1038627325805",
    appId: "1:1038627325805:web:0297b2ebfdc79557bffc64",
    measurementId: "G-P9SWQJDGFG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();
 const db = firebaseApp.firestore();

 export {db,auth};