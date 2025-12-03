var idade = 15
console.log(`Você tem ${idade} anos!`)
if (idade < 16) {
    console.log('Voto proibido')
} else if(idade < 18 || idade >= 67){ //não há necessidade de adcionar "<=16" pois fica subtendido
    console.log('Voto opcinal')
}
else{ //o mesmo de cima vale aqui.
    console.log('Voto obrigatório!')
}
// Não há somente essa forma de fazer isso. JS é incrível!