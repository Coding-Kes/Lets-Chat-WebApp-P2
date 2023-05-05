
var firebaseConfig =
 {
  apiKey: "AIzaSyBB8dflWxYbPwekgmz2ZYt4KQZC0oOCCDg",
  authDomain: "lets-chat-web-app-da603.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-da603-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-da603",
  storageBucket: "lets-chat-web-app-da603.appspot.com",
  messagingSenderId: "747803842548",
  appId: "1:747803842548:web:2ab1d0aeff72229c2d0ba1"
    };
firebase.initalizeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
