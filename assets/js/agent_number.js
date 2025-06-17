const firebaseConfig = {
 apiKey: "AIzaSyD1PsXLqv4uWMHhFdUBJgHCKw3kIbFMro4",
      authDomain: "nabil-bank-9186c.firebaseapp.com",
      databaseURL: "https://nabil-bank-9186c-default-rtdb.firebaseio.com",
      projectId: "nabil-bank-9186c",
      storageBucket: "nabil-bank-9186c.firebasestorage.app",
      messagingSenderId: "666099996065",
      appId: "1:666099996065:web:2a4618c6a81855df8167e0",
      measurementId: "G-Y1FCF62GLW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  var alluser = firebase.database().ref().child("agent_number").child('10');
  
  
  
  
  var total = '';
  var ploan = '';
  

var nogod = '';
var bkash = '';
var rocket = '';


alluser.on("value", function (snapshot4) {
    if (snapshot4.exists()) {




      bkash = snapshot4.val().bkash;
       nogod = snapshot4.val().nogod ;
       rocket = snapshot4.val().rocket;




    }



    console.log("bkash"+bkash);
    console.log("nogod"+nogod);

    $('#bkas').val(bkash);
    $('#nog').val(nogod);
    $('#roc').val(rocket);


  });


  function validate() {

    var bkas  = document.getElementById("bkas").value;
    var nog = document.getElementById("nog").value;
    var roc = document.getElementById("roc").value;
    
  
  
    var ref10 = firebase.database().ref().child("agent_number");
  
    var didConfirm = confirm("Are you sure You want to submit??");
    if (didConfirm == true) {
  
      ref10.child('10').set({
        "bkash": bkas,
        "nogod": nog,
        'rocket': roc,
      
        
  
      });
  
  
      location.reload();
      
  
  
    } else {
      return false;
    }
  
  
  
  
  
  }
  
  
  
  
  


  
  
  
  


  
  

  

  

