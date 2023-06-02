
let contagem = 1;



function recarregar() {
    document.getElementById('img' + contagem).style.display = 'block';

}




function avancar() {
        if (contagem == 6){
            contagem = 0;
        }
        contagem++;
        document.getElementById('img1').style.display = 'none';
        document.getElementById('img2').style.display = 'none';
        document.getElementById('img3').style.display = 'none';
        document.getElementById('img4').style.display = 'none';
        document.getElementById('img5').style.display = 'none';
        document.getElementById('img6').style.display = 'none';
        document.getElementById('img' + contagem).style.display = 'block';
    
    
}

function desavancar() {
    contagem--;
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
    document.getElementById('img6').style.display = 'none';
    document.getElementById('img' + contagem).style.display = 'block';
}