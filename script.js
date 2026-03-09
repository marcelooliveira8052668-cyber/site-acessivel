// ler toda a página

function lerPagina(){

let texto = document.body.innerText;

let fala = new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";

speechSynthesis.speak(fala);

}


// aumentar tamanho do texto

function aumentarTexto(){

document.body.style.fontSize = "26px";

}


// ativar modo alto contraste

function modoContraste(){

document.body.classList.toggle("contraste");

}
// ultimo código do arquivo

function modoContraste(){

document.body.classList.toggle("contraste");

}

/* COLOCAR O NOVO CÓDIGO AQUI */

function emergencia(){

let alerta = new SpeechSynthesisUtterance(
"Atenção. Pedido de ajuda ativado."
);

alerta.lang = "pt-BR";

speechSynthesis.speak(alerta);

if(navigator.vibrate){

navigator.vibrate([300,200,300,200,300]);

}

alert("Pedido de ajuda enviado");

}

function falar(frase){

let voz = new SpeechSynthesisUtterance(frase);

voz.lang = "pt-BR";

speechSynthesis.speak(voz);

}

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}

function mostrarLibras(){

let video = document.getElementById("librasVideo");

if(video.style.display === "none"){

video.style.display = "block";

}else{

video.style.display = "none";

}

}
function modoIdoso(){

document.body.classList.toggle("modo-idoso");

}

function irPara(secao){

document.getElementById(secao).scrollIntoView({

behavior:"smooth"

});

}

document.addEventListener("keydown", function(event){

if(event.key === "1"){

irPara("servicos");

}

if(event.key === "2"){

irPara("comunicacao");

}

if(event.key === "3"){

irPara("acessibilidade");

}

});

function falarMenu(){

let texto = "Menu principal. Pressione 1 para serviços, 2 para comunicação, ou 3 para acessibilidade.";

let voz = new SpeechSynthesisUtterance(texto);

voz.lang = "pt-BR";

speechSynthesis.speak(voz);

}

function responder(){

let pergunta = document.getElementById("pergunta").value.toLowerCase();

let resposta = "";

if(pergunta.includes("ajuda")){

resposta = "Você pode usar os botões de acessibilidade ou falar comandos por voz.";

}

else if(pergunta.includes("acessibilidade")){

resposta = "Este site possui leitura de texto, modo contraste, comando de voz e comunicação por símbolos.";

}

else if(pergunta.includes("emergência")){

resposta = "Clique no botão de emergência para pedir ajuda.";

}

else{

resposta = "Desculpe, ainda estou aprendendo. Tente perguntar sobre ajuda ou acessibilidade.";

}

document.getElementById("resposta").innerText = resposta;

let voz = new SpeechSynthesisUtterance(resposta);

voz.lang = "pt-BR";

speechSynthesis.speak(voz);

}

function descreverImagens(){

let imagens = document.querySelectorAll("img");

imagens.forEach(function(img){

let descricao = img.alt;

if(descricao){

let fala = new SpeechSynthesisUtterance("Imagem: " + descricao);

fala.lang = "pt-BR";

speechSynthesis.speak(fala);

}

});

}