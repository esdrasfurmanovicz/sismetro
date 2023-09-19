function soma(n1,n2){
    return n1 + n2
    
}
function subtracao(n1, n2){
    return n1 - n2
}
function multiplicacao(n1, n2){
    return n1 * n2
}
function divisao(n1, n2){
    return n1 / n2
}
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let resultado = document.getElementById('resultado')
function somar(){
    resultado.value = soma(Number(n1.value), Number(n1.value))
}