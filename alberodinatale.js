
var simbolo = "*";
var spazio = " ";
var tronco = "|";
var row = 6;
var palline = "()";
var req = require("../js/require");
var colors = require("../lib/node_modules/colors");

/*
console.log(spazio.repeat(6)+simbolo.repeat(1));
console.log(spazio.repeat(5)+simbolo.repeat(3));
console.log(spazio.repeat(4)+simbolo.repeat(5));
console.log(spazio.repeat(3)+simbolo.repeat(7));
console.log(spazio.repeat(2)+simbolo.repeat(9));
console.log(spazio.repeat(1)+simbolo.repeat(11));
console.log(spazio.repeat(5)+tronco.repeat(3));
*/

        for( var n_spazi=16,n_stelle=1; n_spazi >= 0 ; n_spazi--, n_stelle+=2){
           
       
             if(n_stelle%2 !=  1){
                console.log(n_spazi);
                console.log(n_stelle);
             
            }
            else{

            console.log(spazio.repeat(n_spazi) + colors.green(simbolo.repeat(n_stelle)));
            }
           
        }
        console.log(spazio.repeat(n_stelle/3)+ colors.red(tronco.repeat(n_stelle/3)));
        console.log(spazio.repeat(n_stelle/3)+ colors.red(tronco.repeat(n_stelle/3)));
        console.log(spazio.repeat(n_stelle/3)+ colors.red(tronco.repeat(n_stelle/3)));

        


      
     
    
