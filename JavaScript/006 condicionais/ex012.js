var agora = new Date()
var diasem = agora.getDay()
//new Date colhe os dados da máquina
//getDay ou getHour... pga determinado dado da máquina.
/*
    Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sábado
*/

switch (diasem) {
    case 0:
        console.log('Domingo');
        break;
//break deve ser aplicado para encerrar o processo assim que encontrar uma solução. 
    case 1:
        console.log('Segunda');
        break; 

    case 2:
        console.log('Terça');
        break;

    case 3:
        console.log('Quarta');
        break;       

    case 4:
        console.log('Quinta');
    break;

    case 5:
        console.log('Sexta');
        break;

    case 6:
        console.log('Sábado');
        break;

    default:
        break;
}