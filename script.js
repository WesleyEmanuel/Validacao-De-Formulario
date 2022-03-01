const form = document.querySelector('.form-container')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const claimButton = document.querySelector('.claim-button')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validarInputs();
})

function validarInputs(){
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    //Validação do Primeiro Nome
    if(firstNameValue == ''){
        addError(firstName, "Campo obrigatório");
    } else {
        addSucess(firstName);
    }

    //Validação do Último Nome
    if(lastNameValue == ''){
        addError(lastName, "Campo obrigatório.");
    } else{
        addSucess(lastName);
    }

    //Validação do Email
    if(emailValue == ''){
        addError(email, "Campo obrigatório.");
    } else if(emailValue.indexOf('@') == -1 || emailValue.indexOf('.') == -1 || emailValue.indexOf('.') - emailValue.indexOf('@') == 1){
        addError(email, "Email inválido.");
    } else{
        addSucess(email);
    }

    //Validação da Senha
    if(passwordValue == ''){
        addError(password, "Campo obrigatório.")
    } else if(passwordValue.length < 6){
        addError(password, "A senha deve conter pelo menos 6 dígitos.")
    } else{
        addSucess(password)
    }

}

function addError(input, mensagem){
    const form = input.parentElement;
    const small = form.querySelector("small");
    form.className = "form-content error";
    small.innerText = mensagem;
}

function addSucess(input){
    const form = input.parentElement;
    form.className = "form-content sucess";
}