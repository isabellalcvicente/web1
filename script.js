// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const mensagens = document.getElementsByClassName("mensagem2");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "Esse título foi modificado com JS";
});

const mudarFraseBtn = document.createElement('button');
mudarFraseBtn.textContent = 'Mude as frases'; 
document.querySelector('.container').appendChild(mudarFraseBtn); 

mudarFraseBtn.addEventListener('click', function (){
    for(let i=0; i<mensagens.length; i++){
        mensagens[i].textContent = `mensagem ${i+1}`
    }
});
