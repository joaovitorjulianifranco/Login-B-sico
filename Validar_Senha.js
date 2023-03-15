    function validateAnswers(){
        var messages = document.messageElement("messages")
        var validateString = document.getElementById();
        /*Validar String de uma letra Digitada*/
        function validateString(str){
            var uppercaseLetters = prompt(str);
            if(/[A-Z]/.test(str) && /[a-z]/.test(str)){
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
            var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            var numberChars = "0123456789";
            var specialChars = "!@#$%^&*()_+";
            var allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
            var choices;

        /*Display da Menssagem*/
        uppercaseChars.onkeyup = function(){
            document.getElementById("message").style.display = "none";
            var messages = [
                "Sua Senha Deve Conter Letras Maiusculas", uppercaseChars,
                "Sua Senha Deve Conter Letras Minusculas", lowercaseChars,
                "Sua Senha Deve Conter Numeros", numberChars, 
                "Sua Senha Deve Conter Caracters Especiais", specialChars,
            ];
            var messagesCorrect =[
                "Senha Redefinida Com Sucesso!",
            ];
            var messagesIncorrect = [
                "Senha Incorreta, Sua Senha Precisa de Letras Maiusculas", uppercaseChars,
                "Senha Incorreta, Sua Senha Precisa de Letras Minusculas", lowercaseChars,
                "Senha Incorreta, Sua Senha Conter Numeros", numberChars,
                "Senha Incorreta, Sua Senha Deve Conter Caracters", specialChars,
            ];
            var allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
            if(messagesElemen != null){
                alert("messagesElement");
            }
            function validatePassword(){
                var passwordInput = document.getElementById("passwordInput").value;
                var messageElement = document.querySelector("message");
                if(passwordInput === "mypassword"){
                    var messageIndex = Math.floor(Math.random() * messagesCorrect.length);
                    messageElement.innerHTML = messagesCorrect[messageIndex];
                }else{
                    var messageIndex = Math.floor(Math.random() * messagesIncorrect.length);
                    messageElement.innerHTML = messagesIncorrect[messageIndex];
                }
                console.log(characters(characters));
                console.info(messages, messagesCorrect, messagesIncorrect);
            }
        }
    }

