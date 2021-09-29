var firebaseConfig = {
      apiKey: "AIzaSyCyiek8T2YJkF6E2FXnvx30Qh0_Qjzxa9Q",
      authDomain: "lets-chat-web-app-3b4b9.firebaseapp.com",
      projectId: "lets-chat-web-app-3b4b9",
      storageBucket: "lets-chat-web-app-3b4b9.appspot.com",
      messagingSenderId: "201168865598",
      appId: "1:201168865598:web:c3a5bef902b55dea5d846f"
    };
    
    // Initialize Firebase
    database.initializeApp(firebaseConfig);
    
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" +  Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("roomm_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

       localStorage.setItem("room_name" , room_name);

       window.location = "kwitter_page.html";
}

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
}
