import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCgefwrR6Jp_BalbWikG-PygBIdFPxsCBI",
  authDomain: "photography-dfaf9.firebaseapp.com",
  databaseURL: "https://photography-dfaf9.firebaseio.com",
  projectId: "photography-dfaf9",
  storageBucket: "photography-dfaf9.appspot.com",
  messagingSenderId: "53429412109"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
