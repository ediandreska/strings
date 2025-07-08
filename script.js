const botaoboMostrapalavras = document. querySelector("#botao-palavrachave");
 botaoboMostrapalavras.addEventListener('click',mostraPalavrasChave);
function mostraPalavrasChave(){ 
    const texto = document.querySelector("#entrada-de-texto").value
const CampoResultado.textContent= texto;
const palavras =texto.split(" ")
campoResulado.textContent= palavras.join(", ")