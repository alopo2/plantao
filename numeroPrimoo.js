let numeroDigitado = 4;
let divisor = 2;

while(numeroDigitado % divisor != 0){
    divisor++;
}

if(numeroDigitado == divisor){
    console.log("Número Primo!");
} else {
    console.log("Número NÃO é primo!");
}