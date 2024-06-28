const axios = require('axios');
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

// Взять текст из полей для ввода
function checkText() {
// Получаем значение из input
var LoginValue = document.getElementById("Login").value;
var passValue = document.getElementById("passwordInput").value;
var myElement = document.getElementById("cont");

axios({
method: 'post',
url: 'http://188.166.179.28:8080/api/login',
data: {
    username: LoginValue,
    password: passValue
}
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
});

}