var participantes = 0
var numparticipantes
var Resultado
var interval
var limpar = 0

function iniciar ()

{    
   
    document.getElementById('Result').innerHTML = 
   `<img id="load" src="Img/loadpng.png" alt="">
   <h1> Carregando resultados </h1>
   `
  

setTimeout(function gerar() {
    participantes = document.getElementById('num')
    numparticipantes = (participantes.value)
    Resultado = Math.random(numparticipantes)* (numparticipantes -2 ) +2;
    if (Resultado <=0){
        Resultado = 1
    }
   
    console.log(Resultado.toFixed())
    document.getElementById('Result').innerHTML = 
    `
    <img id="Trofeu" src="Img/tROFEU.png" alt="">
    <h1> O vencedor foi quem escolheu o número ${Resultado.toFixed(0)} !! </h1>
    
    <button id="refresh">Sortear novamente</button>
    `
    var btn = document.querySelector("#refresh");

btn.addEventListener("click", function() {
    
    location.reload();

});
  limpar = 1
 },2000) }

