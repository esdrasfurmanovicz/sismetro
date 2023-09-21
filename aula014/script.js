let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let resultado = document.getElementById('resultado')

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