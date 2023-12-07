let idSs = document.querySelector('#id')
$('#btnConsultar').on('click', function () {

  if (parg.innerHTML != '') {
    alert("Limpe a pesquisa!")
  } else if (idSs.value == '') {
    alert("Insira um valor valido")
  } else {
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
      }else if(sS.gravidade == 2){
        gravidade = "Pouco grave"
      }else if(sS.gravidade == 3){
        gravidade = "Grave"
      }else if(sS.gravidade == 4){
        gravidade = "Muito grave"
      }else{
        gravidade = "Extremamente grave"
      }

      if (sS.urgencia == 1) {
        urgencia = "Pode esperar"
      }else if(sS.urgencia == 2){
        urgencia = "Pouco urgente"
      }else if(sS.urgencia == 3){
        urgencia = "O mais rápido possível"
      }else if(sS.urgencia == 4){
        urgencia = "É urgente"
      }else{
        urgencia = "Necessita ação imediata"
      }
      
      if (sS.tendencia == 1) {
        tendencia = "Não irá piorar"
      }else if(sS.tendencia == 2){
        tendencia = "	Irá piorar a longo prazo"
      }else if(sS.tendencia == 3){
        tendencia = "Irá piorar a médio prazo"
      }else if(sS.tendencia == 4){
        tendencia = "Irá piorar em pouco tempo"
      }else{
        tendencia = "Irá piorar rapidamente"
      }

      


      console.log(gravidade)
      if (data.valid == false) {
        alert("Não encontrado")
      } else {
        let pares = Object.entries(sS);
        parg.innerHTML += `<div id="idSs"><p><strong>Id da SS:</strong> ${sS.idSs}</p></div>`
        parg.innerHTML += `
            <div id="descricaoSs">
              <h2><strong>Descrição</strong></h2>
              <p>${sS.descricaoSs}</p>
              <div id="abt">
                <p><strong>Aberta por:</strong><br>${sS.abertoPor}</p>
                <p><strong>Data da Abertura:</strong><br>${sS.dataAbertura}</p>
              </div>
              <div id="type">
                <p><strong>Tipo</strong><br>${sS.tipoSs}</p>
                <p><strong>Categoria</strong><br>${sS.categoria}</p>
                <p><strong>Atendimento</strong><br>${sS.atendimento}</p>
              </div>
              <div id="type">
                <p><strong>Tipo</strong><br>${sS.tipoSs}</p>
                <p><strong>Categoria</strong><br>${sS.categoria}</p>
                <p><strong>Atendimento</strong><br>${sS.atendimento}</p>
              </div>
              <div id="gut">
                <h2>GUT</h2>
                <p><strong>Gravidade:</strong><br>${gravidade}</p>
                <p><strong>Urgencia:</strong><br>${urgencia}</p>
                <p><strong>Tendencia:</strong><br>${tendencia}</p>
              </div>
            </div>`
      }
    });
  }
});

const apagar = document.querySelector('#btnLimpar')
apagar.addEventListener('click', function () {
  idSs.value = ''
  parg.innerHTML = ''
})