var ENTRADA = 6;
var FIBONACCI = [1,1];

while (FIBONACCI[0] < ENTRADA) {
    console.log(FIBONACCI);

    FIBONACCI = [ FIBONACCI[1], (FIBONACCI[0]+FIBONACCI[1])];
}

if(FIBONACCI[0]==ENTRADA ){
    console.log("A entrada pertence a sequencia de Fibonacci");
}else{
    console.log("A entrada nao pertence a sequencia de Fibonacci");

}