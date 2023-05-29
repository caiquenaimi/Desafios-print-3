let title = [];
let resum = [];
let data = [];
let cate = [];
let autor = [];
let contador;
let editTitle = '';
/* let editResum = [];
let editData = [];
let editCate = [];
let editAutor = []; */


let i = 0;


function add() {
    title.push(document.getElementById('input1').value);
    resum.push(document.getElementById('input2').value);
    data.push(document.getElementById('input3').value);
    cate.push(document.getElementById('input4').value);
    autor.push(document.getElementById('input5').value);
    let conteudoTitle = '';
    let conteudoResum = '';
    let conteudoData = '';
    let conteudoCate = '';
    let conteudoAutor = '';


    while (i < title.length) {
        if (contador !== undefined) {
            document.getElementsByTagName('h2')[contador].innerHTML = '<h3>' + document.getElementById('input1').value + '</h3>';
            contador = undefined;


        } else {
            conteudoTitle += '<section id="result' + i + '"><h2>' + title[i] + '</h2></section>';
            document.getElementsByTagName('main')[0].innerHTML += conteudoTitle;
            conteudoResum += '<p>' + resum[i] + '</p>';
            document.getElementById('result' + i).innerHTML += conteudoResum;
            conteudoAutor += '<p>' + 'por: ' + '<strong>' + autor[i] + '</strong>' + '</p>';
            document.getElementById('result' + i).innerHTML += conteudoAutor;
            conteudoCate += '<p>' + 'de: ' + cate[i] + '</p>';
            document.getElementById('result' + i).innerHTML += conteudoCate;
            conteudoData += '<p id="date">' + data[i] + '</p>';
            document.getElementById('result' + i).innerHTML += conteudoData;
            document.getElementById('result' + i).innerHTML += '<button onclick="edt(' + "'" + i + "'" + ')">Editar</button>';
            document.getElementById('result' + i).innerHTML += '<button onclick="rmv(' + "'" + i + "'" + ')">Remover</button>';
            conteudoTitle = '';
            conteudoResum = '';
            conteudoData = '';
            conteudoCate = '';
            conteudoAutor = '';
        }


        i++;
    }


}

function rmv(hidden) {
    document.getElementById('result' + hidden).style.display = 'none';
}

function edt(edit) {
    document.getElementById('input1').value = title[edit];
    document.getElementById('input2').value = resum[edit];
    document.getElementById('input3').value = data[edit];
    document.getElementById('input4').value = cate[edit];
    document.getElementById('input5').value = autor[edit];
    /*     editTitle.push(document.getElementById('input1').value);
        editResum.push(document.getElementById('input2').value);
        editData.push(document.getElementById('input3').value);
        editCate.push(document.getElementById('input4').value);
        editAutor.push(document.getElementById('input5').value); */

    contador = edit;

}



