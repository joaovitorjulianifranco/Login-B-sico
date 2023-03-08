const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
/*argumentos senha*/
function validatePassword(password){
    var passwordInput = document.getElementById("password-input");
    var password = passwordInput.value;
}if(password.length < 8){
    document.getElementById("password-message").innerHTML = "Sua Senha Deve Conter pelo menos 8 caracters";
    alert("Sua Senha Deve Conter pelo menos 8 caracters")
    function getGrades(){
        var args = Array.prototype.slice.call(arguments, "Sua Senha Deve Conter pelo menos 8 caracters");
        return args;
    }
}if(!/[A-Z]/.test(password)){
    document.getElementById("password-message").innerHTML = "Sua Senha Deve Conter Letras Maiusculas!";
    alert("Sua Senha Deve Conter Letras Maiusculas!");
    function getGrades(){
        var args = arguments.alert("Sua Senha Deve Conter Letras Maiusculas! [A-Z]");
        return args.alert("Sua Senha Deve Conter Letras Maiusculas! [A-Z]");
    }
}if(!/[a-z]/.test(password-lower)){
    document.getElementById("password-message").innerHTML = "Sua Senha Deve Conter Letras Minusculas";
    alert("Sua Senha Deve Conter Letras Minusculas");
    function getGrades(){
        var args = arguments.alert("Sua Senha Deve Conter Letras Minusculas [a-z]");
        return args.alert("Sua Senha Deve Conter Letras Minusculas [a-z]");
    }
}if (!/\d/.test(password)){
    document.getElementById("password-message").innerHTML = "Sua Senha Deve Conter Caracters ";
    alert("Sua Senha Pode Conter Caracters");
    function getGrades(){
        var args = Array.prototype.slice.call(arguments, "Sua Senha Pode Conter !/\d/");
        return args;
    }
    /*validaçao*/
    function generatePassword(length){
        var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        var numberChars = "0123456789";
        var specialChars = "!@#$%^&*()_+";
        var allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
        var password = "";
        for (var i = 0; i < length; i++){
            var randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
        return password;
    }
    var password = generatePassword(12);
    
}

