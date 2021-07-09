let opcoesElement = document.getElementById('opcoes');
let nextBtn = document.getElementById('nextBtn');
let backBtn = document.getElementById('backBtn');
let paginaAtual = 0;
let opcoesSelecionadas = [];

const opcoes = [
  ["Dificuldade de Respirar", "Dor de Garganta", "Febre", "Tosse", "Nenhum desses sintomas"],
  ["Boca ou Ponta dos Dedos Roxa", "Palidez", "Respirando Muito Rápido", "Pressão Baixa", "Sensação de Desmaio", "Nenhum dos Sintomas"],
  ["Hoje", "1 a 7 Dias", "8 a 14 Dias", "Mais de 14 Dias"]
];


function criaOpcoes(pagina){
  limpaOpcoes();

   opcoes[pagina].forEach(function(item, index){
      opcoesElement.innerHTML += `
        <div class="opcao">
            <input type="checkbox" value="${item}" name="" id="opcao${index}">
            <label for="opcao${index}"> ${item} </label>
        </div>
      `
   })

   paginaAtual = pagina

}

function limpaOpcoes(){
  opcoesElement.innerHTML = "";
}

backBtn.addEventListener("click", function(){
    salvaResposta()
  
    if(paginaAtual > 0){
      criaOpcoes(paginaAtual - 1)
    } else {  
        criaOpcoes(paginaAtual) //add aqui paginas de provavel ou nao provavel
    }
  
  })

nextBtn.addEventListener("click", function(){
  salvaResposta()

  if(paginaAtual < (opcoes.length - 1)){
    criaOpcoes(paginaAtual + 1)
  } else { 
    diagnostico(salvaResposta()) //add aqui paginas de provavel ou nao provavel
  }

})

function salvaResposta(){
  document.querySelectorAll('input:checked').forEach(function(item){
    opcoesSelecionadas.push(item.value)
  })
  console.log("Opcoes ja selecionadas", opcoesSelecionadas)
  return opcoesSelecionadas
}

//funcao de diagnostico

function diagnostico(op){
    if(op.length < 6){
        window.location.replace("http://localhost:3000/diagnostico1.html");
    }else{
        window.location.replace("http://localhost:3000/diagnostico2.html");
    }
}

criaOpcoes(paginaAtual);