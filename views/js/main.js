jQuery(document).ready(function($){
    //fixar o header
    window.onscroll = function(){
        if(window.pageYOffset > 140){
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
        }
    };
});


/*Inicio formulário*/

const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //pega o valor dos inputs do form
    const emailValue = email.nodeValue.trim();

    if(usernameValue === ''){
        //mostra erro
        //adiciona a classe do erro
        setErrorFor(email, 'Email não pode ser em branco');
    }else{
        //adiona a classe do sucesso
        setSucessFor(email);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelection('small');

    //adiciona mensagem de erro 
    small.innerText = message;

    //adiciona a classe do erro
    formControl.className = 'form-control error';


}

/*final formulário*/