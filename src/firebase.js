/* just adding the config from the firebase :fire */
/* const firebaseConfig = {
  // there was the code form the firebase config which has been copied to the firebaseApp which is at below.
};
 */
/* to connect the 
** first install the firebase 
==npm install firebase
 */
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4C4bI5OxhMZuiRNHSvT6e_L5Ysbhaolw",
  authDomain: "personform-64aea.firebaseapp.com",
  databaseURL: "https://personform-64aea.firebaseio.com",
  projectId: "personform-64aea",
  storageBucket: "personform-64aea.appspot.com",
  messagingSenderId: "601358133937",
  appId: "1:601358133937:web:c2c7b06d92f6c409c59090",
  measurementId: "G-VZLM5K2WN4",
});
/* for connecting the database which will hold the the data of the user */
const db = firebaseApp.firestore();
export default db;
