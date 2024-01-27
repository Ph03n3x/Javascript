function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('tano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    var genero = ''
    if(fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src','criança-menino.jpg')
        }
            else if (idade < 15 ) {
                img.setAttribute('src','adol-menino.jpg')
            }
            else if (idade < 25){
                img.setAttribute('src','jovem-homem.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src','homem-adulto.jpg')
            }
            else {
                img.setAttribute('src','homem-velho.jpg')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src','criança-menina.jpg')
        }
        else if (idade < 15 ) {
            img.setAttribute('src','adol-menina.jpg')
        }
        else if (idade < 25){
            img.setAttribute('src','jovem-mulher.jpg')
        }
        else if (idade < 50){
            img.setAttribute('src','mulher-adulta.jpg')
        }
        else {
            img.setAttribute('src','mulher-velha.jpg')
        }
    }
}
res.innerHTML = `Você é um(a) ${genero} com ${idade} Anos`
res.style.textAlign = 'center'
res.appendChild(img)
}