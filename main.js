//COMANDOS NIVEL 1

function iniciar(){
    window.location.href ="tutorialGame.html";
}

function vamos(){
    window.location.href ="niveis.html";
}

function recomeçar(){
    window.location.href= "index.html";
}

function certa1(){
   window.location.href="/fases_nivel1/fase2.html";
   
}

function errou(){
    window.location.href="../gameOver.html";
}

function certa2(){
    window.location.href="/fases_nivel1/fase3.html";
}

function certa3(){
    window.location.href="/fases_nivel1/fase4.html";
}
function certa4() {
    window.location.href="../parabens.html";
}

function fim() {
    window.location.href="../index.html";
}

function creditos() {
    window.location.href="../creditos.html";
}

function voltar() {
    window.location.href="../index.html";
}

function feedback(){
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfbAzVjZEIN_iGcRt3LjcWBE7z-7psaMfE02VxdhDoRa9_ASw/viewform?usp=sf_link";
}
//SELEÇAO DE IDADE
function idade1(){
    window.location.href="/fases_nivel1/jogo.html"
}

function idade2(){
    window.location.href="/fases_nivel2/jogo.html";
}

function idade3(){
    window.location.href="/fases_nivel3/jogo.html"
}

//SELEÇAO DE FAIXA ETARIA
var faixa1 = new Audio();
faixa1.src = '/audio/3_a_4.mp3';

var faixa2 = new Audio();
faixa2.src = '/audio/5_a_6.mp3';

var faixa3 = new Audio();
faixa3.src = '/audio/7_anos_ou_mais.mp3';

//FASES DE NIVEL 2

function certa1_nivel2(){
    window.location.href="/fases_nivel2/fase2.html";
    
 }

 function errou_nivel2(){
    window.location.href="../gameOver.html";
}

function certa2_nivel2(){
    window.location.href="/fases_nivel2/fase3.html";
}

function certa3_nivel2(){
    window.location.href="/fases_nivel2/fase4.html";
}

function certa4_nivel2(){
    window.location.href="../parabens.html";
}

//COMANDOS FASE DE NIVEL 3

//TEMPORIZADOR GAMER OVER
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = window.location.href="../gameOver.html";
        }
        
    }, 1000);
}
window.onload = function (){
    var duration = 60 * 0.25; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

//COMANDOS NIVEL 3

function errou_nivel3(){
    window.location.href="../gameOver.html";
}

function certa1_nivel3(){
    window.location.href="/fases_nivel3/fase2.html";
    
 }

 function certa2_nivel3(){
    window.location.href="/fases_nivel3/fase3_nivel3.html";
    
 }

 function certa3_nivel3(){
    window.location.href="/fases_nivel3/fase4.html";
    
 }

 function certa4_nivel3(){
    window.location.href="../parabens.html";
    
 }
  