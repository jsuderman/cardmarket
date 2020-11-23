import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAwKkb-gjPQq5wyspvx2FlbORlGTd8cHCM",
    authDomain: "sneakermarket-57c90.firebaseapp.com",
    databaseURL: "https://sneakermarket-57c90.firebaseio.com",
    projectId: "sneakermarket-57c90",
    storageBucket: "sneakermarket-57c90.appspot.com",
    messagingSenderId: "900796096317",
    appId: "1:900796096317:web:d003cce12c6cd6defbef54",
    measurementId: "G-9BCSXNRSBW",


});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };