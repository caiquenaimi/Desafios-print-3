const imgs = document.getElementById("img");
const img =document.querySelectorAll("#img img");
// adição de uma const aos elementos de imagem
let idx = 0;
 // definindo o let com valor 0
function carrossel (){
    idx++;

    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}//funcionalidade de pssarem do carrossel o fazendo passar de tempo em tempo

setInterval(carrossel, 4000)