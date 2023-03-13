const nota1 = 10
const nota2 = 10
const nota3 = 10
const nota4 = 10

const media = (nota1 + nota2 + nota3 + nota4) / 4;
    
if (media === 0) {
    alert ('Infelizmente você zerou a prova :(');
}else if ( media >= 0.1 && media === 3){
    alert (`Caramba, deu ruim, você obteve media ${media}! Estude mais e tente novamente!`);
}else if ( media >= 3.1 && media == 5.9){
    alert (`Você obteve média ${media}! Falta pouco para a média.`);
}else if (media >= 6 || media === 7 ){
    alert (`Você está na média com nota ${media}!`);
}else if (media >= 7.1 && media === 9.9){
    alert (`Notão! Sua média é ${media}!`);
}else{
    alert (`Hoje é seu aniversário? Pq você ta de parabéns! ${media}`)
}