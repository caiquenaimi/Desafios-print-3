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
    data.push(document.getElementById('input3').value.split('-').reverse().join('-'));
    cate.push(document.getElementById('input4').value);
    autor.push(document.getElementById('input5').value);
    let conteudoTitle = '';
    let conteudoResum = '';
    let conteudoData = '';
    let conteudoCate = '';
    let conteudoAutor = '';
    if (contador !== undefined) {
        title[contador] = document.getElementById('input1').value;
        resum[contador] = document.getElementById('input2').value;
        data[contador] = document.getElementById('input3').value.split('-').reverse().join('-');
        cate[contador] = document.getElementById('input4').value;
        autor[contador] = document.getElementById('input5').value;
        document.getElementsByTagName('h2')[contador].innerHTML = title[contador];
        document.getElementsByClassName('resumos')[contador].innerHTML = resum[contador];
        document.getElementsByClassName('datas')[contador].innerHTML = data[contador];
        document.getElementsByClassName('categorias')[contador].innerHTML = 'de: ' + cate[contador];
        document.getElementsByClassName('autores')[contador].innerHTML = 'por: <strong>' + autor[contador] + '</strong>';
        title.pop();
        resum.pop();
        data.pop();
        cate.pop();
        autor.pop();
        contador = undefined;
    } else {
        while (i < title.length) {
            conteudoTitle += '<section id="result' + i + '"><h2>' + title[i] + '</h2></section>';
            document.getElementsByTagName('main')[0].innerHTML += conteudoTitle;
            conteudoResum += '<p class="resumos">' + resum[i] + '</p>';
            document.getElementById('result' + i).innerHTML += conteudoResum;
            conteudoAutor += '<p class="autores">' + 'por: ' + '<strong>' + autor[i] + '</strong>' + '</p>';
            document.getElementById('result' + i).innerHTML += conteudoAutor;
            conteudoCate += '<p class="categorias">' + 'de: ' + cate[i] + '</p>';
            document.getElementById('result' + i).innerHTML += conteudoCate;
            conteudoData += '<p class="datas" id="date">' + data[i] + '</p>';
            document.getElementById('result' + i).innerHTML += conteudoData;
            document.getElementById('result' + i).innerHTML += '<button id="btn1" onclick="edt(' + "'" + i + "'" + ')">Editar🖊</button>';
            document.getElementById('result' + i).innerHTML += '<button id="btn2" onclick="rmv(' + "'" + i + "'" + ')">Remover🗑</button>';
            conteudoTitle = '';
            conteudoResum = '';
            conteudoData = '';
            conteudoCate = '';
            conteudoAutor = '';
            i++;
        }

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
    contador = edit;

}