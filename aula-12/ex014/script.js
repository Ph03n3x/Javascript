function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} Horas`;


    if (hora >= 0 && hora <= 5) {
        window.document.getElementById('md').style.display = "block" ;
        document.body.style.backgroundColor = '#005361'
        msg.innerHTML += '<br>Boa Madrugada!' 
        ;
    } else if (hora >= 6 && hora <= 11) {
        window.document.getElementById('m').style.display = "block" 
        document.body.style.backgroundColor = '#B39995' 
        msg.innerHTML += '<br>Bom Dia!!' 
    } else if (hora >= 12 && hora <= 18) {
        window.document.getElementById('t').style.display = "block" 
        document.body.style.backgroundColor = '#F2D6BE' 
        msg.innerHTML += '<br>Boa Tarde!!' 
    } else {
        window.document.getElementById('n').style.display = "block"  
        document.body.style.backgroundColor = '#0D304A'
        msg.innerHTML += '<br>Boa Noite!' 
    }
}