let title = [];
let resum = [];
let data = [];
let cate = [];
let autor = [];
let i = 0;

function add() {
    let input1Value = document.getElementById('input1').value;
    let input2Value = document.getElementById('input2').value;
    let input3Value = document.getElementById('input3').value;
    let input4Value = document.getElementById('input4').value;
    let input5Value = document.getElementById('input5').value;

    if (input1Value && input2Value && input3Value && input4Value && input5Value) {
        title.push(input1Value);
        resum.push(input2Value);
        data.push(input3Value);
        cate.push(input4Value);
        autor.push(input5Value);

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
    } else {
        // Campos do formulário não estão todos preenchidos
        console.log("Preencha todos os campos do formulário");
    }
}

function removeSelected() {
    let checkboxes = document.getElementsByName('checkRmv');
    let contador = 0;

    for (let l = 0; l < checkboxes.length; l++) {
        if (checkboxes[l].checked) {
            document.getElementById('result' + contador).style.display = 'none';
        }
        contador++;
    }
}




