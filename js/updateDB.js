import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get, push, update } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

var firebaseConfig = {
    apiKey: "AIzaSyAuOkcu74iEsSSkI7nxllQZmWVRSTmeWx0",
    authDomain: "uya-g2-674ce.firebaseapp.com",
    databaseURL: "https://uya-g2-674ce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uya-g2-674ce",
    storageBucket: "uya-g2-674ce.appspot.com",
    messagingSenderId: "174249225002",
    appId: "1:174249225002:web:ccc6bd049342e282984c53",
    measurementId: "G-ZWMYSP352K"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function writeUsers(brithday, dni, email, name, password, pago, login) {
  const newInfo = {
    brithday: brithday,
    dni: dni,
    email: email,
    login: login,
    name: name,
    pago: pago,
    password: password
  }

  const key = push(child(ref(db), 'users')).key;

  const updates = {};
  updates['/users/' + key] = newInfo;

  return update(ref(db), updates);
}