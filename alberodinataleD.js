
var simbolo = "*";
var spazio = " ";
var tronco = "|";
var palline = "()";
var req = require("../js/require");
var colors = require("../lib/node_modules/colors");
var randomsimboli = [];

randomsimboli = ['*','()'];
var scelta = Math.floor(Math.random() *randomsimboli.length); 

/*
console.log(spazio.repeat(6)+simbolo.repeat(1));
console.log(spazio.repeat(5)+simbolo.repeat(3));
console.log(spazio.repeat(4)+simbolo.repeat(5));
console.log(spazio.repeat(3)+simbolo.repeat(7));
console.log(spazio.repeat(2)+simbolo.repeat(9));
console.log(spazio.repeat(1)+simbolo.repeat(11));
console.log(spazio.repeat(5)+tronco.repeat(3));
*/

        for( var i=0,n_spazi=16,n_stelle=1; n_spazi >= 0 ; n_spazi--, n_stelle+=2,i++){
           
            // SE E' PARI RIMANGO
             if(n_stelle%2 !=  1){
              
             
            }
            // DISPARI FACCIO QUESTO
            else{
            //ALBERO 0.1
            //console.log(spazio.repeat(n_spazi) + colors.green(simbolo.repeat(n_stelle)));
           
           // PRENDO LA RIGA
           
           // GENERA VALORE RANDOM
 
            //SE NELLA RIGA  SONO PRESENTI PIU' ASTERISCHI
            if(n_stelle > 1){
                    //VADO QUI 
                  //  console.log("numero spazi: " + n_spazi);
                   // console.log("numero random gen : " + random_posizione_palline);
                    // SE DENTRO ALLA POSIZIONE RANDOM DELLA RIGA  CHE HO TROVATO NON C'E' UNO SPAZIO
                   // console.log("pos è : " + pos);
                switch (scelta){
                         case '*' :    var row = spazio.repeat(n_spazi) + scelta[i].repeat(n_stelle);
                                        console.log(row);
                        break;
                        case '()' :   var row = spazio.repeat(n_spazi) + scelta[i].repeat(n_stelle);
                        console.log(row);
                        break;
               
                }
            }
            else{
                console.log(row);
            }
            //LUNGHEZZA DELLA RIGA
            //console.log(spazio.repeat(n_spazi).length + simbolo.repeat(n_stelle).length);
            }
           
        }
        //TRONCO ALBERO
        console.log(spazio.repeat(n_stelle/3)+ colors.red(tronco.repeat(n_stelle/3)));
        console.log(spazio.repeat(n_stelle/3)+ colors.red(tronco.repeat(n_stelle/3)));
        console.log(spazio.repeat(n_stelle/3)+ colors.red(tronco.repeat(n_stelle/3)));

        


      
     
    
