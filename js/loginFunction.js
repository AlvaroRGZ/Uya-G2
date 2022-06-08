import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { writeUsers } from './updateDB.js';
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

document.getElementById("clickLogin").addEventListener("click", checkLogin);

function checkLogin() {
  var element = document.getElementById("error-message");
  if (element != null) {
    element.parentNode.removeChild(element);
  }
  var input_email = document.getElementById("email").value;
  var input_password = document.getElementById("contraseña").value;

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`)).then((snapshot) => {
    if (snapshot.exists()) {
      var data = JSON.parse(JSON.stringify(snapshot.val()));
      console.log(data);
      for (const user in data) {
        if (data[user].email == input_email) {
          if (data[user].password == input_password) {
            data[user].login = true;
            var userData = data[user];
            set(ref(db, 'users/' + userData.name), {
              birthday: userData.birthday,
              dni: userData.dni,
              email: userData.email,
              login: true,
              name: userData.name,
              pago: userData.pago,
              password: userData.password
            })
            .then(() => {
              $( "<p/>", {
                "class": "green-text",
                "id": "ok-message",
                html: "Inicio de sesión correcto, volviendo a Inicio..."
              }).appendTo( "#login-error-message" );
              setTimeout( function() {window.location.href = "./index.html";}, 1500);
            })
            .catch((error) => {
              console.log(error);
              $( "<p/>", {
                "class": "red-text",
                "id": "error-message",
                html: "Error"
              }).appendTo( "#login-error-message" );
            });
            return;
          }
        }
      }      
      $( "<p/>", {
        "class": "red-text",
        "id": "error-message",
        html: "Datos introducidos incorrectos, pruebe de nuevo"
      }).appendTo( "#login-error-message" );
    } else {
      // $('#incomingUsuario')
      console.log("No data available");
      $( "<p/>", {
        html: "Error"
      }).appendTo( "#login-error-message" );
    }
  }).catch((error) => {
    console.error(error);
  });
}
