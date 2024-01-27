let valores = [];
function adicionar() {
  const inseri = document.getElementById("numeroInserido");
  const number = Number(inseri.value);
  console.log(number);

  inseri.value = "";
  if (number == 0) {
    window.alert("Número Inválido!");
    return;
  }

  if (number < 1 || number > 100) {
    window.alert("Número não está dentro do alcance");
    return;
  }
  if (valores.includes(number)) {
    window.alert("Número já inserido, não repita!");
    return;
  }

  valores.push(number);

  atualizarListaNumero();
}

function atualizarListaNumero() {
  const listarray = document.getElementById("array");
  listarray.innerHTML = "";
  
  for (let i = 0; i < valores.length; i++) {
    const texto = `<p>Você Adicionou o ${valores[i]}</p><br>`;
    listarray.innerHTML += texto;
  }
}
function finalizar() {
  valores.sort();
  var soma = 0;
  for (let i = 0; i < valores.length; i++){
    
    soma += valores[i];
  }
  const maior = valores[valores.length - 1]
  const media = soma/valores.length
  
  const listafinal = document.getElementById("resposta");


  listafinal.innerHTML += `Foram adicionados ${Number(valores.length)} números.<br>
  O maior Valor adicionado foi ${maior} <br>
  O menor Valor adicionado foi ${valores[0]} <br>
  A soma de todos os valores é ${soma}<br>
  A Média de todos os valores é ${parseInt(media)}`;
  //console.log(soma);
}
//listafinal.innerHTML = "";
