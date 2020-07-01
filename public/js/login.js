
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         document.getElementById('user-info').style.display= "block";
//         document.getElementById('user-login').style.display="none";
//         // window.alert("user logged in");
//     } else {
//       // User is signed out.
//       // ...
//       // window.alert("user logged out");
//         document.getElementById('user-info').style.display= "none";
//         document.getElementById('user-login').style.display="block";
//     }
//   });

//user login button function
function login(){
    var loginEmail = document.getElementById('login-mail').value;
    var loginPassword= document.getElementById('login-password').value;
    // window.alert(email +" "+ password);
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error : "+ errorMessage);
    });

}
//user register button function
function register(){
    var registerName = document.getElementById('register-name').value;
    var registerRollnumber = document.getElementById('register-rollnumber').value;
    var registerEmail = document.getElementById('register-email').value;
    var registerDepartment = document.getElementById('register-department').value;
    var registerYear=document.getElementById('register-year').value;
    var registerPassword=document.getElementById('register-password').value;
    window.alert(registerName+"\n"+registerRollnumber+"\n"+registerDepartment+"\n"+registerEmail+"\n"+registerYear+"\n"+registerPassword);
    firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("ERRor: "+errorMessage);
      // ...
    });

    //create new document into the firestore for userInformation
    var firestore =firebase.firestore();
    firestore.collection("Users").doc("rahul").set({
      Name: registerName,
      Rollnumber: registerRollnumber,
      Email: registerDepartment,
      Department: registerDepartment,
      Year: registerYear
    }).then(function(){
      console.log("The user data is uploaded");
    }).catch(function(error){
      console.log("Failed");
    });
    
}
function logout(){
  firebase.auth().signOut();
}
