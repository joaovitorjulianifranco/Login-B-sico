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
    /*validaçao-gera uma senha de comprimento especificado */
    function validatePassword(newpassword){
        function generatePassword(length);
        password.getElementById("newpassword").value = newpassword;
        password.getElementById("confirmPassword");
        var uppercaseChars = "/[A-Z]/";
        var lowercaseChars = "/[a-z]/";
        var numberChars = "0123456789";
        var specialChars = "!@#$%^&*()_+";
        var algoChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
        var password ="";
    }
    const password = req.query.password || '';
    confirmpassword = password.replace(uppercaseChars + lowercaseChars + numberChars + specialChars);
    if(!newpassword || !confirmpassword){
        return res.sendStatus(400);
    }for(var i = 0; i < password.length; i++){
        var newpassword = Math.floor(Math.random() * allChars.length);
        password += allChars[newpassword];
    }
    return confirmpassword;
}
