let title = [];
let resum = [];
let data = [];
let cate = [];
let autor = [];
let contador;

function add() {
  let inputTitle = document.getElementById('input1').value;
  let inputResum = document.getElementById('input2').value;
  let inputData = document.getElementById('input3').value.split('-').reverse().join('-');
  let inputCate = document.getElementById('input4').value;
  let inputAutor = document.getElementById('input5').value;

  if (inputTitle === '' || inputResum === '' || inputData === '' || inputCate === '' || inputAutor === '') {
    let msg = document.getElementById('p1');
    msg.innerHTML = 'Preencha o formulário antes de adicionar um artigo';
    return;
  }

  let msg = document.getElementById('p1');
  msg.innerHTML = '';

  if (contador !== undefined) {
    title[contador] = inputTitle + ' - Editado';
    resum[contador] = inputResum;
    data[contador] = inputData;
    cate[contador] = inputCate;
    autor[contador] = inputAutor;
    contador = undefined;
  } else {
    title.push(inputTitle);
    resum.push(inputResum);
    data.push(inputData);
    cate.push(inputCate);
    autor.push(inputAutor);
  }

  let conteudo = '';

  for (let i = 0; i < title.length; i++) {
    conteudo += '<section id="result' + i + '">';
    conteudo += '<h2>' + title[i] + '</h2>';
    conteudo += '<p class="resumos">' + resum[i] + '</p>';
    conteudo += '<p class="autores">' + 'por: ' + '<strong>' + autor[i] + '</strong>' + '</p>';
    conteudo += '<p class="categorias">' + 'de: ' + cate[i] + '</p>';
    conteudo += '<p class="datas" id="date">' + data[i] + '</p>';
    conteudo += '<button id="btn1" onclick="edt(' + i + ')">Editar🖊</button>';
    conteudo += '<button id="btn2" onclick="rmv(' + i + ')">Remover🗑</button>';
    conteudo += '</section>';
  }

  document.getElementsByTagName('main')[0].innerHTML = conteudo;
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
