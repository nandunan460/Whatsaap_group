import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCPGRVr2tMi_6-YnhAgcdIZPmrF37B3O8o",
  authDomain: "whatsapp-6e414.firebaseapp.com",
  projectId: "whatsapp-6e414",
  storageBucket: "whatsapp-6e414.appspot.com",
  messagingSenderId: "359314707202",
  appId: "1:359314707202:web:5f6395f9a42062b44b681b",
  measurementId: "G-7ZGPDH2KX7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
