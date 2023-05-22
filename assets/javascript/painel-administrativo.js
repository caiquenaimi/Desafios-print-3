
function add() {
    var nome = document.getElementById("input1").value;
    var resumo = document.getElementById("input2").value;
    var publi = document.getElementById("input3").value;
    var autor = document.getElementById("input5").value;
    var fixpubli = publi.split("-").reverse().join("/");
    var nome1 = [];
    var resumo1 = [];
    var publi1 = [];
    var autor1 = [];
    var arr = [];
    


    
    var modal = document.getElementById("modal-container");
    nome1.push(nome);
    resumo1.push(resumo);
    publi1.push(fixpubli);
    autor1.push(autor);
    arr.push(nome1, resumo1, publi1, autor1);
    console.log(arr);
    modal.innerHTML = `<section><h1 id="h1">${nome1}</h1><br><p id="p">${resumo1}</p><br><p id="p">${publi1}</p><br><p id="p">${autor1}</p></section>`;
    
    
    var nome = document.getElementById("input1").value = '';
    var resumo = document.getElementById("input2").value = '';
    var publi = document.getElementById("input3").value = '';

    var autor = document.getElementById("input5").value = '';

    modal.innerHTML = `<section><h1 id="h1">${nome1}</h1><br><p id="p">${resumo1}</p><br><p id="p">${publi1}</p><br><p id="p">${autor1}</p></section>`;

}

