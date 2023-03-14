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
    document.getElementById("password-message").innerHTML = "Sua Senha Deve Conter Caracters";
    alert("Sua Senha Pode Conter Caracters");
    function getGrades(){
        var args = Array.prototype.slice.call(arguments, "Sua Senha Pode Conter !/\d/");
        return args;
    }
    /*Validar a string de uma letra digitada*/
    function validateString(str){
        var uppercaseLetters = prompt(str);
        if (/[A-Z]/.test(str) && /[a-z]/.test(str)){
            letters.classList.remove("invalid");
            letters.classList.add("valid");
            letter.classList.remove("valid");
            letter.classList.add("invalid");
            return undefined;
        }
        console.log(validateString(uppercaseChars(str)));
        console.log(validateString(lowercaseChars(str)));
        console.log(validateString(numberChars(str)));
    }
    /*Código de atribuição */
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()_+";
    var allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    var choices;
    /*Caixa de Menssagem*/
    uppercaseChars.onkeyup = function(){
        document.getElementById("message").style.display = "none";
    }
    const menssagem = new MessageChannel();
    var menssagem = prompt(uppercaseChars);
    var menssagem = prompt(lowercaseChars);
    var menssagem = prompt(numberChars);
    var menssagem = prompt(specialChars);
    var allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    if(menssagem != null){
        alert("Sua Senha Deve Conter Letras Maiusculas" + uppercaseChars + "Sua Senha Deve Conter Letras Minusculas" + lowercaseChars + "Sua Senha Deve Conter Numeros" + numberChars + "Sua Senha Deve Conter Caracters Especiais" + specialChars + "!");
    }
    /*Definir menssagem aleatoria*/
    var messages = [
        "Sua Senha Deve Conter Letras Maiusculas",
        "Sua Senha Deve Conter Letras Minusculas",
        "Sua Senha Deve Conter Numeros",
        "Sua Senha Deve Conter Caracters Especiais",
    ];
    var correctPassword = verifyPassword(password);
    function checkPassword(input){
        if(input === verifyPassword){
            var verifyPassword =! allChars;
        }
        function showMessage(){
            var randomIndex = Math.floor(Math.random() * messages.length);
            alert("Sua Senha Deve Conter Letras Maiusculas" + uppercaseChars + "Sua Senha Deve Conter Letras Minusculas" + lowercaseChars + "Sua Senha Deve Conter Numeros" + numberChars + "Sua Senha Deve Conter Caracters Especiais" + specialChars + "!");
        }
        /*Display da Menssagem*/
      var passwordInput = prompt(messages[randomIndex] + "Digite Sua Senha");
      window.prompt(messages["Sua Senha Deve Conter Letras Maiusculas" + uppercaseChars + "Sua Senha Deve Conter Letras Minusculas" + lowercaseChars + "Sua Senha Deve Conter Numeros" + numberChars + "Sua Senha Deve Conter Caracters Especiais" + specialChars + "!"]);
      alert(allChars);
  }if(correctPassword === password){
      alert("Senha Correta!");
  }else{
      alert("Senha Incorreta!");
  }
  showMessage();
}
