const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for(let i=0; i<botoes.length; i++) {
  botoes[i].onclick = function() {
    for(let k=0; k-botoes.length; k++) {
      botoes[k].classList.remove('ativo');
      textos[k].classList.remove('ativo');
      botoes[k].classList.remove('ativo');

    }
    botoes[i].classList.add('ativo');
     textos[i].classList.add('ativo');
  }
}

//iniciar os compiutadores
const contadores = document.querySelectorAll('.contador');

let dataHoje = new date();

contadores[0].textContent(dateHoje);