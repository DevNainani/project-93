const firebaseConfig = {
      apiKey: "AIzaSyCbp9ln5p9ADVO64XMEuLIS9GhHe8pnfyY",
      authDomain: "kwitter-19aaf.firebaseapp.com",
      projectId: "kwitter-19aaf",
      storageBucket: "kwitter-19aaf.appspot.com",
      messagingSenderId: "922261436880",
      appId: "1:922261436880:web:42edb4c460d35e915da1d5",
      measurementId: "G-903NW7B4RF"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" +user_name + "!";
 
 function addroom()
 {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
 }

 function redirectToRoomName(name)
 {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = kwitter_page.html
 }

 function getData()
  { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
        console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
       });
       });