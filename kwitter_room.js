const firebaseConfig = {
      apiKey: "AIzaSyAxB2amBju8qYCPWSzTrCUC6zNgN8r95AA",
      authDomain: "kwitter-21d1b.firebaseapp.com",
      projectId: "kwitter-21d1b",
      storageBucket: "kwitter-21d1b.appspot.com",
      messagingSenderId: "833957337080",
      appId: "1:833957337080:web:ef1cf834dd643d44a1a80d",
      measurementId: "G-HED0JTF2J6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
    function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
     purpose: "adding room name"

    });
   localStorage.setItem("room_name", room_name);
   window.location= "kwitter_page.html";

    }


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names); 
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row; });
       }); 
      } 
      getData();
       function redirectToRoomName(name) {
              console.log(name);
             localStorage.setItem("room_name", name);
              window.location = "kwitter_page.html";
             }
              function logout() { 
                    localStorage.removeItem("user_name");
              localStorage.removeItem("room_name"); 
              window.location = "kwitter.html";
              }

              



     

