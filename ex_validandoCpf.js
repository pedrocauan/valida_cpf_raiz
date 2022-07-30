const cpf = [5,2,9,9,8,2,2,4,7,2,5]
//[1,1,1,1,1,1,1,1,1,1,1]

const mult1 = [10,9,8,7,6,5,4,3,2]
const mult2 = [11, 10,9,8,7,6,5,4,3,2]
let soma = 0;
let resto;
//ve se todos os digitos sao iguais
if(cpf[0] === cpf[1]  && 
    cpf[1] === cpf[2] && 
    cpf[2] === cpf[3] && 
    cpf[3] === cpf[4] && 
    cpf[4] === cpf[5] && 
    cpf[5] === cpf[6] && 
    cpf[6] === cpf[7] && 
    cpf[7] === cpf[8] && 
    cpf[8] === cpf[9] && 
    cpf[9] === cpf[10]
)
{
    console.log(`CPF inválido !!`)
}
else{
    //valida primeiro digito
    for(let i = 0; i < 9; i++){
        soma += (cpf[i] * mult1[i])
    }
    resto = (soma * 10) % 11 /*Calculo de validação da receita*/
    //se o resto é 10 significa que o digito é maior que 9, logo, o digito é  convertido para 0
    if(resto === 10){
        resto = 0
    }
    //Se nao for o digito penultimo digito, não é o mesmo cpf, logo, é inválido
    else if(resto !== cpf[9]){
        console.log(`CPF INVÁLIDO !!`)
    }
    else {
        soma = 0 //zera  a soma pra validar o ultimo digito
        //Valida o ultimo
        for(let i = 0; i < 10; i++){
            soma += (cpf[i] * mult2[i])
        }
        resto = (soma * 10) % 11
        if(resto === 10){
            resto = 0
        }
        //indice 10 para adicionar o digito que foi validado anteriormente na conta
        if(resto !== cpf[10]){
            console.log(`CPF INVÁLIDO !!`)
        }
        else {
            console.log(`CPF É VALIDO!!`)
        }
    }
}
