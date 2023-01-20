 const togglePassword = document.querySelector("#password-toggle");
                        const password = document.querySelector("#password");
                        togglePassword.addEventListener("click", function(click){
                            // Alternar atributo
                            const type = password.getAttribute("type") === "password" ? "text" : "password";
                                password.setAttribute("type", type);
                            // Alternar o icone ao Mostrar a senha
                            this.classList.toggle("bi-eye");
                        });
                            //impedir envio de formulário
                            const formulário = document.querySelector("#formulário");
                            form.addEventListener("submit", function (e){
                                e.preventDefault();
                            });




//#--public binding() {
//   for (const event of this.triggeringEvents) {
//     this.node.addEventListener(event, this);
//    }
//  }
//   aurelia/aurelia/validate-binding-behavior.spec.ts
   
//  add(name) {
//    for (let i = 0; i < events[name].length; i++) {
//      element.addEventListener(name, events[name][i]);
//    }
//  }
//   jinkelajs/jinkela/AttributesManager.ts
   
//  private bindBeautifyEvent(el: HTMLInputElement) {
//    el.nextElementSibling!.addEventListener('click', () => {
//      el.click()
//    })
//}
