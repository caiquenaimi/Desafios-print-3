let title = [];
let resum = [];
let data = [];
let cate = [];
let autor = [];

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
        conteudoTitle += '<section id="result' + i + '"><h1>' + title[i] + '</h1></section>';
        document.getElementsByTagName('main')[0].innerHTML += conteudoTitle;
        conteudoResum += '<p>' + resum[i] + '</p>';
        document.getElementById('result' + i).innerHTML += conteudoResum;
        conteudoAutor += '<p>' + 'por: ' + '<strong>' + autor[i] + '</strong>' + '</p>';
        document.getElementById('result' + i).innerHTML += conteudoAutor;
        conteudoCate += '<p>' + 'de: ' + cate[i] + '</p>';
        document.getElementById('result' + i).innerHTML += conteudoCate;
        conteudoData += '<p id="date">' + data[i] + '</p>';
        document.getElementById('result' + i).innerHTML += conteudoData;
        document.getElementById('result' + i).innerHTML += '<input name="checkRmv" type="radio">';
        conteudoTitle = '';
        conteudoResum = '';
        conteudoData = '';
        conteudoCate = '';
        conteudoAutor = '';
        i++;
    }


}

let l = 0;

while (l < document.getElementsByName('checkRmv').length){
    if (document.getElementsByName('checkRmv')[l].checked){
        document.getElementById('result' + l).style.display = 'none';
    }
    l++
}