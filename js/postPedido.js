import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

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

// Your web app's Firebase configuration
$('#botonRegistrarUsuario').on("click", function( event ) {  
  set(ref(db, 'users/alvaro'), {
    birthday: {
      day: 29,
      month: 9,
      year: 1994
    },
    cuenta: {
      CCC: 12345678,
      IBAN: "ES13"
    },
    descuento: 0.05,
    dni: {
      letter: "B",
      number: 618394289
    }, 
    id: 77,
    name: "alvaro",
    pago: "tarjeta",
    productos: {
      agua: {
        precio: 4,
        unidades: 2
      },
      pan: {
        precio: 2,
        unidades: 23
      },
    }

  });
});