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

document.getElementById("clickRegister").addEventListener("click", doRegister);
document.getElementById("clickRegister").addEventListener("keypress", doRegister);

function doRegister() {
  var element = document.getElementById("error-message");
  if (element != null) {
    element.parentNode.removeChild(element);
  }
  var input_name = document.getElementById("name").value;
  var input_email = document.getElementById("email").value;
  var input_password = document.getElementById("contraseña").value;
  var input_telf = document.getElementById("telf").value;
  var input_repContr = document.getElementById("rep-contr").value;

  if ((input_name != "") && (input_email != "") &&
      (input_password != "") && (input_repContr != "") && 
      (input_telf != "")) 
  {
    if (input_password == input_repContr) {
      set(ref(db, 'users/' + input_name), {
        birthday: "empty",
        dni: "empty",
        email: input_email,
        login: false,
        name: input_name,
        pago: "empty",
        password: input_password,
        telf: input_telf
      })
      .then(() => {
        $( "<p/>", {
          "class": "green-text",
          "id": "ok-message",
          html: "Registro completo. Por favor, inicie sesión."
        }).appendTo( "#login-error-message" );
        setTimeout( function() {window.location.href = "./login.html";}, 2000);
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
    } else {
      $( "<p/>", {
        "class": "red-text",
        "id": "error-message",
        html: "Las contraseñas no coinciden, inténtelo de nuevo"
      }).appendTo( "#login-error-message" );
    }
  } else {
    $( "<p/>", {
      "class": "red-text",
      "id": "error-message",
      html: "Introduzca todos los datos"
    }).appendTo( "#login-error-message" );
  }
}
