let idSs = document.querySelector('#id')

$('#btnConsultar').on('click', function () {
  if (document.querySelector("#if").innerHTML == '.') {
    alert("Limpe a pesquisa!")
  } else if (idSs.value == '') {
    alert("Insira um valor valido")
  } else {
    document.querySelector('#if').innerHTML = '.'
    let parg = document.getElementById('parg')
    let a = $.ajax({
      method: 'get',
      url: 'https://get.api.sismetro.com/SS/findBySs?ss=' + $(idSs).val(),
      headers: {
        unit: 269,
        key: '8a32de8f679c270cce25144694a08819',
      },
    });
    a.done(function (data) {
      let sS = data.resultList[0]
      console.log(data)
      console.log(sS.valid)
      let gravidade = ""
      let urgencia = ""
      let tendencia = ""
      if (sS.gravidade == 1) {
        gravidade = "Sem Gravidade"
      } else if (sS.gravidade == 2) {
        gravidade = "Pouco grave"
      } else if (sS.gravidade == 3) {
        gravidade = "Grave"
      } else if (sS.gravidade == 4) {
        gravidade = "Muito grave"
      } else {
        gravidade = "Extremamente grave"
      }

      if (sS.urgencia == 1) {
        urgencia = "Pode esperar"
      } else if (sS.urgencia == 2) {
        urgencia = "Pouco urgente"
      } else if (sS.urgencia == 3) {
        urgencia = "O mais rápido possível"
      } else if (sS.urgencia == 4) {
        urgencia = "É urgente"
      } else {
        urgencia = "Necessita ação imediata"
      }

      if (sS.tendencia == 1) {
        tendencia = "Não irá piorar"
      } else if (sS.tendencia == 2) {
        tendencia = "	Irá piorar a longo prazo"
      } else if (sS.tendencia == 3) {
        tendencia = "Irá piorar a médio prazo"
      } else if (sS.tendencia == 4) {
        tendencia = "Irá piorar em pouco tempo"
      } else {
        tendencia = "Irá piorar rapidamente"
      }




      console.log(gravidade)
      if (data.valid == false) {
        alert("Não encontrado")
      } else {
        let pares = Object.entries(sS);
        const idSs = document.querySelector('#idSs')
        document.querySelector("#abertaPor").innerHTML += `${sS.abertoPor}`
        document.querySelector('#desc').innerHTML += `${sS.descricaoSs}`
        idSs.querySelector('p').innerHTML += `${sS.idSs}`
        document.querySelector('#dataAbertura').innerHTML += `${sS.dataAbertura}`
        document.querySelector('#tipoSs').innerHTML += `${sS.tipoSs}`
        document.querySelector('#categoria').innerHTML += `${sS.categoria}`
        document.querySelector('#atendimento').innerHTML += `${sS.atendimento}`
        document.querySelector('#gravidade').innerHTML += `${gravidade}`
        document.querySelector('#urgencia').innerHTML += `${urgencia}`
        document.querySelector('#tendencia').innerHTML += `${tendencia}`
        document.querySelector('#evolucao').innerHTML += `${sS.evolucao}`
      }
    });
  }
});

const apagar = document.querySelector('#btnLimpar')
apagar.addEventListener('click', function () {
  document.querySelector("#if").innerHTML = ''
 document.querySelector("#abertaPor").innerHTML = `<strong>Aberta por:</strong><br>`
 document.querySelector("#idSs").innerHTML = `<p><strong>Id da SS:</strong></p>`
 document.querySelector('#desc').innerHTML = ``
 document.querySelector('#dataAbertura').innerHTML = `<strong>Data da Abertura:</strong><br>`
 document.querySelector('#tipoSs').innerHTML = `<strong>Tipo:</strong><br>`
 document.querySelector('#categoria').innerHTML = `<strong>Categoria:</strong><br>`
 document.querySelector('#atendimento').innerHTML = `<strong>Atendimento:</strong><br>`
 document.querySelector('#gravidade').innerHTML = `<strong>Gravidade:</strong><br>`
 document.querySelector('#urgencia').innerHTML = `<strong>Urgencia:</strong><br>`
 document.querySelector('#tendencia').innerHTML = `<strong>Tendencia:</strong><br>`
  document.querySelector('#evolucao').innerHTML = `<strong>Evolução </strong><br>`
})