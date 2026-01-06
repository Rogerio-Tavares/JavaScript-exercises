function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('ERRO! Faltam dados!')
    } else {
        res.innerHTML= 'Contando:... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //Aqui o contador deve concatenar o passo
        if (i < f) {
            //Contagem Crescente
            for (let c = i; c <= f; c += p ) {
            //Aqui a resposta deve concatenar os numeros contados + o contador
            res.innerHTML += ` ${c} \u{1F449}`
            }
            } else { 
                //Contagem regressiva
                for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }