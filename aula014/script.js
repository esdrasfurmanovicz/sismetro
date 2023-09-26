var valor
var operacao



function efetuar_soma(){
    if(typeof valor != typeof undefined && typeof operacao != typeof undefined){
        valor = operacao(valor, Number(document.getElementById('valor').value))
    }else{
        valor = Number(document.getElementById('valor').value)
        document.getElementById('valor').value = "";
    }
    operacao = soma
}

function resultado(){
    document.getElementById('valor').value = operacao(valor, Number(document.getElementById('valor').value))

    valor = undefined
    operacao = undefined
}


function insere0(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(0)
}
function insere1(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(1)
}
function insere2(){
    valor.value = document.getElementById('valor').value.concat(2)
}
function insere3(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(3)
}
function insere4(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(4)
}
function insere5(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(5)
}
function insere6(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(6)
}
function insere7(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(7)
}
function insere8(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(8)
}
function insere9(){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(9)
}

function apagar(){
    document.getElementById('valor').value = document.getElementById('valor').value.substring(0, document.getElementById('valor').value.length - 1)
}

let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')

function soma(n1,n2){
    return n1 + n2;
}
function subtr(n1,n2){
    return n1 - n2;
}
function mult(n1,n2){
    return n1 * n2;
}
function div(n1,n2){
    return n1 / n2;
}
function somar(){
    resultado.value = soma(Number(n1.value), Number(n2.value))
}
function menos(){
    resultado.value = subtr(Number(n1.value), Number(n2.value))
}
function vezes(){
    resultado.value = mult(Number(n1.value), Number(n2.value))
}
function dividido(){
    resultado.value = div(Number(n1.value), Number(n2.value))
}