import firebase from 'firebase/app';
import "firebase/storage"

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhNjiInRYGfeHsloqrJyKPqODFgWkBSPE",
    authDomain: "carriers-5aa2b.firebaseapp.com",
    projectId: "carriers-5aa2b",
    storageBucket: "carriers-5aa2b.appspot.com",
    messagingSenderId: "301705112002",
    appId: "1:301705112002:web:7dc72adf617eb567ccce5b",
    measurementId: "G-PJYTZ7DJ89"
  };

 const app = firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  export {storage, app, firebase as default};