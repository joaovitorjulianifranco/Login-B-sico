function matchPassword(){
    var button = document.getElementById("button");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    var confirmPassword = document.forms["pestcontrol"]["confirmpassword"];
    var exist = false;

    function matchPassword(){
        alert('Senha Errada ' + passwordInput.value);
    }if(password !== confirmPasswordInput){
        document.getElementById("message").innerHTML="**A senha deve ter pelo menos 8-20 caracteres";
        alert('A senha deve ter pelo menos 8-20 caracteres')
    }if(verifyPassword()){
        document.getElementById("message").innerHTML="**A senha deve conter letras maiusculas e minusculas";
        alert("A senha deve conter letras maiusculas e minusculas");
        if(typeof password == 'undefined') password = true;
    }else if(validatePassword(password)){
        const password = "Senha Digitada ";
        const isValid = validatePassword(password);
        document.getElementById('message').innerHTML="**Sua Senha Está Correta!"
        alert("**Sua Senha Está Correta");
        console.log(isValid);
    }
}
