function HUCALC(str) {
    return /\d/.test(str);
}

function hD(str) {
  return /[a-zA-Z]/.test(str);
}

function hch(str) {
  return /[^\w\s]/.test(str);
}

function checkText() {

    const email = document.getElementById("Email");
    const Log = document.getElementById("Login");
    const pass1 = document.getElementById("passwordInput");
    const pass2 = document.getElementById("passwordInput1");
    const elem1 = document.getElementById("ch1");
    const elem2 = document.getElementById("ch2");
    const elem3 = document.getElementById("ch3");
    const elem4 = document.getElementById("ch4");
    const x4 = document.getElementById("x4");
    let f1 = false;
    let f2 = false;
    let f3 = false;
    let f4 = false;
    let f5 = false;

    if (pass1.value.length >= 8 && pass1.value.length <= 15) {
        elem1.style.color = "#10bc00";   
        f1 = true
    } else {
        elem1.style.color = "#EC0000";
        f1 = false
    }
    if (HUCALC(pass1.value) == true) {
        elem3.style.color = "#10bc00";
        f2 = true
    } else {
        elem3.style.color = "#EC0000";
        f2 = false
    }

    if (hD(pass1.value) == true) {
        elem2.style.color = "#10bc00";
        f3 = true
    } else {
        elem2.style.color = "#EC0000";
        f3 = false
    }

    if(hch(pass1.value) == true) {
        elem4.style.color = "#10bc00";
        f4 = true
    } else {
        elem4.style.color = "#EC0000";
        f4 = false
    }

    if (pass1.value == pass2.value){
        f5 == true
        x4.style.opacity = 0;
    } else {
        x4.style.opacity = 1;
    }
    if (f1 == true || f2 == true || f3 == true || f4 == true || f5 == true) {

const requestOptions = {
method: "POST",
body: JSON.stringify(
   {
    "email":email.value,
    "username":Log.value,
    "password":pass1.value,
}
),
headers: {
    'Content-Type': 'application/json'
}
};

fetch("http://188.166.179.28:8080/api/register", requestOptions)
    .then((response) => response.text())
    .then((result) => {
    console.log(result);
    if (result === "Success"){
        window.location.href = "comit.html?email=" + encodeURIComponent(email);
    }
    else {
        myElement.style.opacity = 1
        pass2.text.style.color = "red";
    }
})
  .catch((error) => {console.log(error)});

}

}
    
    

function togglePasswordVisibility() {
var passwordInput = document.getElementById('passwordInput');
var togglePassword = document.querySelector('.toggle-password');

if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.style.background = 'url(\'path/to/eye-open-icon.png\') no-repeat center center'; /* Подставьте путь к вашей иконке открытого глазка */
} else {
    passwordInput.type = 'password';
    togglePassword.style.background = 'url(\'path/to/eye-icon.png\') no-repeat center center';
}
}