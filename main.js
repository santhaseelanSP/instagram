const firebaseConfig = {
    apiKey: "AIzaSyCHmay-A6NCOVwOUv6Wj2nOP6l4PwSETHs",
    authDomain: "web1-58957.firebaseapp.com",
    databaseURL: "https://web1-58957-default-rtdb.firebaseio.com",
    projectId: "web1-58957",
    storageBucket: "web1-58957.appspot.com",
    messagingSenderId: "801585614125",
    appId: "1:801585614125:web:cf76af9379227465c057a4"
  };
  firebase.initializeApp(firebaseConfig);



  function addDetailsToDb()
  {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    firebase.database().ref(username).set(password);
    console.log("added")
    event.preventDefault();
    setTimeout(function() {open()} , 2000);
  }

  function open()
  {
    window.location.href = "successPage.html";
  }
