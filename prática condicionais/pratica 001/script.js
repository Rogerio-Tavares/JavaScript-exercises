function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12
        //APÓS OS CONECTIVOS, DEVO CHAMAR NOVAMENTE A VARIÁVEL
        ) {
   
   //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#e5d1b6'
        //PARA SELECIONAR AS CORES, USEI O CONTAGOTA NO GINP PARA SABER QUAL O CÓDIGO DA COR
    }
    else if (hora > 12 && hora <= 18) {
    //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#b4866c'
    }
    else{
    //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#142537'
    }
}