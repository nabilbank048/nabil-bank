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
    
    
    
    var alluser = firebase.database().ref().child("admin").child('super_admin');
    
    
    
    
    var admin = '';
    var pass = '';
    
  
  
  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        admin = snapshot4.val().username;
         pass = snapshot4.val().password ;
  
  
  
  
  
      }
  
  

  
      $('#bkas').val(admin);
      $('#nog').val(pass);
    
  
  
    });
  
  
    function validate() {
  
      var bkas  = document.getElementById("bkas").value;
      var nog = document.getElementById("nog").value;
   
      
    
    
      var ref10 = firebase.database().ref().child("admin");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('super_asdmin').set({
          "username": bkas,
          "password": nog,

        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
    
    
  
  
    
    
    
    
  
  
    
    
  
    
  
    
  
  