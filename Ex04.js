var SP = 67836.43;
var RJ = 36678.66;
var MG = 29229.88;
var ES = 27165.48;
var outros = 19849.53;

var total = SP + RJ + MG + ES + outros;

var percentualSP = (SP*100)/total;
var percentualRJ = (RJ*100)/total;
var percentualMG = (MG*100)/total;
var percentualES = (ES*100)/total;
var percentualOutros = (outros*100)/total;

var percentualTotal = percentualSP + percentualRJ + percentualMG + percentualES + percentualOutros;



console.log ("Percentual de SP:"+ percentualSP + "%");
console.log ("Percentual de RJ:"+ percentualRJ + "%");
console.log ("Percentual de MG:"+ percentualMG + "%");
console.log ("Percentual de ES:"+ percentualES + "%");
console.log ("Percentual de outros:"+ percentualOutros + "%");




