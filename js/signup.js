var signupNameInput =document.getElementById('signupName');
var signupEmailInput =document.getElementById('signupEmail');
var signuppassInput =document.getElementById('signuppass');
var exists = document.getElementById('exists');
var required = document.getElementById('required');
var Success = document.getElementById('Success');

var signUpArray =[];

if (localStorage.getItem('signUp')!==null) {
    signUpArray = JSON.parse(localStorage.getItem('signUp'));
}

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false;
        }
    }
}
function signUp() {
    if (validationName() ===true && validationEmail() ===true && validationPass()===true)  {
        var signUp = {
            name: signupNameInput.value,
            email: signupEmailInput.value,
            password: signuppassInput.value,
        }
        
        if (isEmailExist() == false) {
           existAppear();
           requiredhide();
           Successhide();
    
        } else {
            signUpArray.push(signUp)
            localStorage.setItem('signUp', JSON.stringify(signUpArray));
               SuccessAppear();
               existshide();
               requiredhide();
        }
        clearInputes();
      
    }
    else{
        requiredAppear();
        existshide();
        Successhide();
    }

}
 
function clearInputes() {
    signupNameInput.value ='';
    signupEmailInput.value = ''; 
    signuppassInput.value ='';
   
};
function validationName() {
    var nameRegex =  /[a-zA-Z-0-9-@#$%^&*()]{3,}/;
    if (nameRegex.test(signupNameInput.value)===true) {
        return true;
    }else{
        return false;
    }
};
function validationEmail() {
    var emailRegex = /[a-zA-Z]{1,15}(@)[A-Za-z]{3,9}.\.(com)/;
    if (emailRegex.test(signupEmailInput.value)===true) {
        return true;
    }else{
        return false;
    }
}
function validationPass() {
    var passRegex = /[a-zA-Z-0-9-@#$%^&*()]+/;
    if (passRegex.test(signuppassInput.value)===true) {
        return true;
    }else{
        return false;
    }
}
function existAppear() {
    exists.classList.replace('d-none' , 'd-block');
    
}
function requiredAppear() {
    required.classList.replace('d-none' , 'd-block');
    
}
function requiredhide() {
    required.classList.replace('d-block','d-none');
    
}
function existshide() {
    exists.classList.replace('d-block','d-none');
    
}
function Successhide() {
    Success.classList.replace('d-block','d-none');
    
}
function SuccessAppear() {
    Success.classList.replace('d-none' , 'd-block');
    
}





