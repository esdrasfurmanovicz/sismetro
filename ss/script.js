let idSs = document.querySelector('#idSs')
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
          console.log(data)
          console.log(data.valid)
          if (data.valid == false) {
            alert("Não encontrado")
          } else {
            let sS = data.resultList[0]
            let pares = Object.entries(sS);

            pares.forEach(([chave, valor]) => {
              parg.innerHTML += `<div class="child"><p><strong>${chave}</strong>:  ${valor}</p></div>`
            })
          }
        });
      }
    });

    const apagar = document.querySelector('#btnLimpar')
    apagar.addEventListener('click', function () {
      idSs.value = ''
      parg.innerHTML = ''
    })