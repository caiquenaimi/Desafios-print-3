function entrar() {
    var aument1 = window.document.querySelector('section#hob1')
    var aument2 = window.document.querySelector('section#hob2')
    aument1.style.webkitBoxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument1.style.mozBoxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument1.style.boxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument2.style.opacity = '0.1'
    aument2.style.transition = '1s'
    aument1.style.transition = '1s'
    aument2.style.display = 'none'
    aument1.style.scale = '1.5'
    aument1.style.border = '5px solid white'
} //fazer ao clicar duas vezes dar um destaque

function sair() {
    var aument1 = window.document.querySelector('section#hob1')
    var aument2 = window.document.querySelector('section#hob2')
    aument1.style.webkitBoxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument1.style.mozBoxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument1.style.boxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument2.style.opacity = '1'
    aument1.style.transition = '1s'
    aument2.style.display = 'unset'
    aument1.style.border = '0px solid white'
    aument1.style.scale = 'none'
} //fazer clicar uma vez sair do destaque

function sair1() {
    var aument1 = window.document.querySelector('section#hob1')
    var aument2 = window.document.querySelector('section#hob2')
    aument2.style.webkitBoxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument2.style.mozBoxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument2.style.boxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument1.style.opacity = '1'
    aument1.style.transition = '1s'
    aument2.style.transition = '1s'
    aument1.style.display = 'unset'
    aument2.style.border = '0px solid white'
    aument2.style.scale = 'none'
} //fazer clicar uma vez sair do destaque

function entrar1() {
    var aument1 = window.document.querySelector('section#hob1')
    var aument2 = window.document.querySelector('section#hob2')
    aument2.style.webkitBoxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument2.style.mozBoxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument2.style.boxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument1.style.opacity = '0.1'
    aument1.style.transition = '1s'
    aument2.style.transition = '1s'
    aument1.style.display = 'none'
    aument2.style.scale = '1.5'
    aument2.style.border = '5px solid white'
} //fazer ao clicar duas vezes dar um destaque

function clickent() {
    var aument3 = window.document.querySelector('div#sobre1')
    var aument1 = window.document.querySelector('section#hob1')
    var aument2 = window.document.querySelector('section#hob2')
    var som1 = window.document.querySelector('h1#hob-title')
    aument3.style.webkitBoxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument3.style.mozBoxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument3.style.boxShadow = '0px 0px 1000px 1000px rgba(0,0,0,0.6)'
    aument1.style.opacity = '0.1'
    aument2.style.opacity = '0.1'
    som1.style.opacity = '0.1'
    aument3.style.scale = '1.5'
    aument3.style.border = '5px solid white'
} //fazer ao clicar duas vezes dar um destaque

function clickexit() {
    var aument3 = window.document.querySelector('div#sobre1')
    var aument1 = window.document.querySelector('section#hob1')
    var aument2 = window.document.querySelector('section#hob2')
    var som1 = window.document.querySelector('h1#hob-title')
    aument3.style.webkitBoxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument3.style.mozBoxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument3.style.boxShadow = '10px 14px 23px 5px rgba(217,214,217,0.28)'
    aument1.style.opacity = '1'
    aument2.style.opacity = '1'
    som1.style.opacity = '1'
    aument3.style.transition = '1s'
    aument3.style.scale = 'none'
    aument3.style.border = '0px solid white'
} //fazer clicar uma vez sair do destaque