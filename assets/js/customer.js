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
    
    
    var service_name = '';
    var url = '';
    
    var key2 = '';
    
    var customer = firebase.database().ref().child("customer_care");
    
    
  
    
    
    var sigImage = '';
    
    
    
  
    
    
    
  
    
    
    customer.once("value").then(function (snapshot) {

        if (snapshot.exists()) {
      
          var content = '';
      
      
      
      
      
      
          snapshot.forEach(function (data) {
      
      
      
            var val = data.val();

            console.log(val.url)
      
            content += '<tr name="bc">';
      
            // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
      
      
            content += '<td >' + val.service_name + '</td>';
            content += '<td >' + val.url + '</td>';
       
      
      
      
            // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';
      
            content += "<td>" +
            '<a href="#" data-tip="edit" style="color: rgb(28, 81, 214);" onclick=edit("' + data.key + '") ><i class="fa fa-edit"></i></a>' +
      
    
    
            "</td>";
      
      
            content += '</tr>';
      
      
      
      
      
      
          });
      
      
      
      
      
      
          $('#atttbl_posts_body').html(content);
      
      
        }
      
      
      });
    
  
    function edit(key) {
  
      //alert(key)
    
      key2 = key ;
    
      document.getElementById("mainp").style.display = "none"
      document.getElementById("frm").style.display = "none"
      document.getElementById("user").style.display = "none"
      document.getElementById("clos").style.display = "block"
      document.getElementById("det3").style.display = "block"
    
      var arr = document.getElementsByName('x').value;



      var ref5 = firebase.database().ref().child("customer_care").child(key);
  
  
      console.log(key)
    
    
      ref5.on("value", function (snapshot4) {
          if (snapshot4.exists()) {
    
    
    
            service_name = snapshot4.val().service_name;
            url = snapshot4.val().url;
      
       
    
    
    
    
    
    
          }
    
  
    $('#pstatus').html(service_name);
    
      
    
          $('#mob').val(url);
  
    
    
        })
   
  
    
    }
    
    
    function myclose() {
        // get user input
        document.getElementById("mainp").style.display = "block"
        document.getElementById("frm").style.display = "block"
        document.getElementById("user").style.display = "block"
        document.getElementById("clos").style.display = "none"
   
        document.getElementById("det2").style.display = "none"
        document.getElementById("det3").style.display = "none"
         document.getElementById("det4").style.display = "none"
      
        notif = '';
      
      
      }
      
    
    

    
    
      function validate34() {
        var didConfirm = confirm("Are you sure You want to Update ??");

        if (didConfirm == true) {
    
    
    
          const url2 = document.getElementById('mob').value;
      
    
      
        
      
          var database = firebase.database();
      
      
          database.ref('customer_care').child(key2).set({
      
      
            'service_name': service_name,
            'url': url2,
     
          
      
      
          }).then(() =>{
            window.location.href = "customer.html";
           });
      
    
        }
    
        else {
          return false;
      }
    
      }
    
    
    
    
    
    
    
    