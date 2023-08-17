const email = document.getElementById("email-input");
const password = document.getElementById("password-input");

const logInBtn = document.getElementById('login-btn');
logInBtn.addEventListener('click', function(){
    emailValue = email.value;
    passwordValue = password.value;
    email.value = '';
    password.value = '';

    if(emailValue === "jasmin@hotmail.com" && passwordValue === "jasmin"){
        window.location.href = 'bank.html'
    }else{
        alert("Please remember your password")
    }
})