let title = [];
let resum = [];
let data = [];
let cate = [];
let autor = [];
let contador;

function add() {

  document.getElementById('buttonadd').innerHTML = 'Adicionar';
  let inputTitle = document.getElementById('input1').value;
  let inputResum = document.getElementById('input2').value;
    //variaveis da data
  let inputData = document.getElementById('input3').value.split('-').join('/');
  let dataHj = new Date(inputData);

  let inputCate = document.getElementById('input4').value;

  let inputAutor = document.getElementById('input5').value;

  if (inputTitle === '' || inputResum === '' || inputData === '' || inputCate === '' || inputAutor === '') {
    let msg = document.getElementById('p1');
    msg.innerHTML = 'Preencha o formulário antes de adicionar um artigo';
    return;
  }
//if da data
  if (dataHj.setHours(20) < new Date()) {
    let msg = document.getElementById('p1');
    msg.innerHTML = 'Preencha com a data a partir do dia de hoje';
    return;
  }

  let msg = document.getElementById('p1');
  msg.innerHTML = '';

  if (contador !== undefined) {
    title[contador] = inputTitle + ' - Editado0]';
    resum[contador] = inputResum;
    data[contador] = inputData;
    cate[contador] = inputCate;
    autor[contador] = inputAutor;
    contador = undefined;
  }


  else {
    title.push(inputTitle);
    resum.push(inputResum);
    data.push(inputData);
    cate.push(inputCate);
    autor.push(inputAutor);
  }

  let conteudo = '';

  for (let i = 0; i < title.length; i++) {
    conteudo += '<section id="result' + i + '">';
    conteudo += '<h2 id = "h2title">' + title[i] + '</h2>';
    conteudo += '<p class="resumos">' + resum[i] + '</p>';
    conteudo += '<p class="autores">' + 'Por: ' + '<strong>' + autor[i] + '</strong>' + '</p>';
    conteudo += '<p class="categorias">' + 'Categoria: ' + cate[i] + '</p>';
    conteudo += '<p class="datas" id="date">' + data[i].split('/').reverse().join('-') + '</p>';
    conteudo += '<button id="btn1" onclick="edt(' + i + ')"><a href="#filho">Editar🖊</a></button>';
    conteudo += '<button id="btn2" onclick="rmv(' + i + ')">Remover🗑</button>';
    conteudo += '</section>';
  }

  document.getElementsByTagName('main')[0].innerHTML = conteudo;

  document.getElementById('input1').value = '';
  document.getElementById('input2').value = '';
  document.getElementById('input3').value = '';
  document.getElementById('input4').value = '';
  document.getElementById('input5').value = '';
}

function rmv(hidden) {
  document.getElementById('result' + hidden).style.display = 'none';
  title.splice(hidden, 1);
  resum.splice(hidden, 1);
  data.splice(hidden, 1);
  cate.splice(hidden, 1);
  autor.splice(hidden, 1);
}

function edt(edit) {
  document.getElementById('input1').value = title[edit];
  document.getElementById('input2').value = resum[edit];
  data[edit] = data[edit].split('/').join('-');
  document.getElementById('input3').value = data[edit];
  document.getElementById('input4').value = cate[edit];
  document.getElementById('input5').value = autor[edit];

  contador = edit;


  if (contador !== undefined) {
    let buttonadd = document.getElementById("buttonadd");

    buttonadd.innerHTML = `Atualizar`
  }

}
