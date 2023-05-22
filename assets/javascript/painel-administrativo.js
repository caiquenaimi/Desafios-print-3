var nome = document.getElementById("input1").value;
var resumo = document.getElementById("input2").value;
var publi = document.getElementById("input3").value;
var categoria = document.getElementById("input4").value;
var autor = document.getElementById("input5").value;
let nomearr= [];
let resumoarr= [];
let publiarr= [];
let categoriaarr= [];
let autorarr= [];

nomearr.push(nome);
resumoarr.push(resumo);
publiarr.push(publi);
categoria.push(categoria);
autorarr.push(autor);


function add() {

    do {
        var modal = document.getElementById("modal-container");


        modal.innerHTML = `<div class="modal"><p id="p">${nomearr}${resumoarr}${publiarr}${categoriaarr}${autorarr}</p></div>`


    } while (!(nome === null || resumo === null || publi === null || categoria == null || autor == null));
}

