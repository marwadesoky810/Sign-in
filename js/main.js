var signinEmailInput = document.getElementById('signinEmail');
var signinpassInput = document.getElementById('signinpass');
var required = document.getElementById('required');

var usersList = JSON.parse(localStorage.getItem("signUp")) || [];

function signIn() {
    var email = signinEmailInput.value;
    var password = signinpassInput.value;

    var userFound = false;

    for (var i = 0; i < usersList.length; i++) {
        var user = usersList[i];
        if (user.email === email && user.password === password) {
            userFound = true;
            window.location.href = "html/home.html";

            break;
        }
    }
    if (!userFound){
        reqAppear();
    }

     
}

function reqAppear() {
    required.textContent = "Invalid email or password. Please try again.";
    required.classList.replace('d-none', 'd-block');
   
}




// var userFound = false;

// for (var i = 0; i < usersList.length; i++) {
//     var user = usersList[i];
//     if (user.email === email && user.password === password) {
//         userFound = true;
//         // Redirect to the home page after successful login
//         window.location.href = "home.html";
//         break;
//     }
// }

// if (!userFound) {
//     alert("Invalid email or password. Please try again.");
// }
// }



