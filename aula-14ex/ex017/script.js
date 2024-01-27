function criarImputnovo(){
  const form = document.getElementById("formulario-tabuada")
  const novoInput = document.createElement("input")
  novoInput.type = "number"
  novoInput.id = "limitador"
  novoInput.min = "1"
  novoInput.value = "1"
  form.appendChild(novoInput);

 


}

criarImputnovo();



function montarTabuada() {
  let numInsert = numeroinserido
  let divResp = tabuada
  let limite = Number(document.getElementById("limitador").value)
  console.log(numInsert.value.length)
  if (numInsert.value.length == 0) {
    console.log ("número inválido")

  }
let contador = 1

  while (contador <= limite) {
    const valorMultiplicado = Number(numInsert.value) * contador

    let resultadotab = document.createElement("span");
    resultadotab.innerHTML = `${contador}x ${numInsert.value} = ${valorMultiplicado} <br>`
    divResp.appendChild(resultadotab)
    contador ++
  }
}