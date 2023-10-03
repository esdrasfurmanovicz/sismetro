var valor
var operacao
var num
var memoria = 0
function efetuar_soma(){
    if(typeof valor != typeof undefined && typeof operacao != typeof undefined){
        valor = operacao(valor, Number(document.getElementById('valor').value))
    }else{
        valor = Number(document.getElementById('valor').value)
        document.getElementById('valor').value = "";
    }
    operacao = soma
}

function efetuar_subtra(){
    if(typeof valor != typeof undefined && typeof operacao != typeof undefined){
        valor = operacao(valor, Number(document.getElementById('valor').value))
    }else{
        valor = Number(document.getElementById('valor').value)
        document.getElementById('valor').value = "";
    }
    operacao = subtr
}
function efetuar_divis(){
    if(typeof valor != typeof undefined && typeof operacao != typeof undefined){
        valor = operacao(valor, Number(document.getElementById('valor').value))
    }else{
        valor = Number(document.getElementById('valor').value)
        document.getElementById('valor').value = "";
    }
    operacao = div
}
function efetuar_vezes(){
    if(typeof valor != typeof undefined && typeof operacao != typeof undefined){
        valor = operacao(valor, Number(document.getElementById('valor').value))
    }else{
        valor = Number(document.getElementById('valor').value)
        document.getElementById('valor').value = "";
    }
    operacao = mult
}
function efetuar_porcent(){
        document.getElementById('valor').value = porcent(Number(document.getElementById('valor').value), valor) 
/* Ex: 70 - 20%
   na hora que apertar a operação de subtração, o valor sera 70 e o document 20, ou seja n1 = 70 e n2 = 20
   
*/
}
function addNumero(){
    valor = addnum(Number(document.getElementById('valor').value))
}
function menosNumero(){
    valor = menosnum(Number(document.getElementById('valor').value))
}
function apagarMemoria(){
    memoria = 0
    return console.log(memoria)
}
function mostrarMemoria(){
    document.getElementById('valor').value = memoria
}



function resultado(){
    document.getElementById('valor').value = operacao(valor, Number(document.getElementById('valor').value))

    valor = undefined
    operacao = undefined
}

function inserir(num){
    document.getElementById('valor').value = document.getElementById('valor').value.concat(num)
}
function apagar(){
    document.getElementById('valor').value = document.getElementById('valor').value.substring(0, document.getElementById('valor').value.length - 1)
}
function apagar_all(){
    document.getElementById('valor').value = document.getElementById('valor').value.substring(0, document.getElementById('valor').value.length - document.getElementById('valor').value.length)
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
function porcent(n1, n2){        // n1 = 20 e n2 = 70
    if (typeof n2 == typeof undefined){
        return (n1 / 100)
    } else{
        return (n2 / 100) * n1
    }
}
function addnum(n1){
    memoria += n1
    return console.log(memoria)
}
function menosnum(n1){
    memoria -= n1
    return console.log(memoria)
}

