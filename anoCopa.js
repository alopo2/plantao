//O ano da primeira copa foi 1930
//O ano da próxima copa será 2026

let anoCopa = 1930;
//Esta variável inicializa com o numero 1930, e toda vez que laço de repetição rodar, ela recebe um novo valor.
let ultimaCopaAno = 2026;
//Esta variável é o limite que defini para o programa rodar.

while(anoCopa <= ultimaCopaAno){
    console.log(`Teve copa em: ${anoCopa}`)
    anoCopa = anoCopa + 4
}
//A primeira que o programa rodar, minha variável anoCopa será 1930. 
//A segunda vez que o programa rodar, minha variável será 1930 + 4 = 1934
//O programa se repetirá até chegar em 2026. 

for (let i = 0; i <= 10; i++){
    console.log(i)
}