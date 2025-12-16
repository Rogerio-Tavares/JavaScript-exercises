function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value >ano) {
        window.alert('ERRO! Tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) //[0] indica ser o primeiro checked do html
        {
            gênero = 'Homem'
            if(idade >=0 && idade <= 10 ) {
                //criança
                img.setAttribute(`src`, `./imagens/bebem.png`)
            } else if(idade > 10 && idade <= 21) {
                //jovem
                img.setAttribute(`src`, `./imagens/jovemm.png`)
            } else if(idade > 21 && idade <= 50) {
                //adulto
                img.setAttribute(`src`, `./imagens/adultom.png`)
            } else {
                //idoso
                img.setAttribute(`src`, `./imagens/idosom.png`)
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade <= 10 ) {
                //criança
                img.setAttribute(`src`, `./imagens/bebef.png`)
            } else if(idade > 10 && idade <= 21) {
                //jovem
                img.setAttribute(`src`, `./imagens/jovemf.png`)
            } else if(idade > 21 && idade <= 50) {
                //adulto
                img.setAttribute(`src`, `./imagens/adultof.png`)
            } else {
                //idoso
                img.setAttribute(`src`, `./imagens/idosof.png`)
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
