//1.  Inicializar a contagem com 0.
let cont = 0;
//2.  Detectar cliques nos botões de contagem.
const botaoMais = document.querySelector('#botao-mais');
const botaoMenos = document.querySelector('#botao-menos');

botaoMais.addEventListener("click", () => soma(+1));
botaoMenos.addEventListener("click", () => soma(-1));

function soma(qtde) {
//2.1.  Somar +1 ou -1 dependendo do botão clicado.
  cont += qtde;

//2.2.  Exibir a contagem atual no <output>. → Atualizar VIEW!
  const output = document.querySelector('output');
  output.innerHTML = cont;

  if (cont > 0) {
    output.classList.add('text-success');
  } else if (cont == 0) {
    output.classList.remove('text-success');
    output.classList.remove('text-danger');
  } else {
    output.classList.add('text-danger');
  }
}
