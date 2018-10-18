
// MODIFICA QUI GLI ELEMENTI DEL TUO ALBERO
var simbolo = "*";
var spazio = " ";
var tronco = "|";
var palline = "O";
var stellina= "+";

//MODULO COLORI
var colors = require("../lib/node_modules/colors"); // TUO PATH

//  ARRAY RANDOM TRA I SIMBOLI CHE FARANNO PARTE DEL TUO ALBERO
var randomsimboli = [];
//  DICHIARAZIONE DEGLI ELEMENTI
randomsimboli = [simbolo, palline];


// ARRAY CHE CONTINUA FINO A TOT RIGHE (N_SPAZI), N_STELLE = 1(GLI ASTERISCHI PERCHE' E' LA PUNTA) , LE SUCCESSIVE AUMENTANO
// OGNI 3 , MENTRE GLI SPAZI DIMINUISCONO
for (var n_spazi = 16, n_stelle = 1; n_spazi >= 0; n_spazi-- , n_stelle += 2) {



    // SE E' PARI RIMANGO
    if (n_stelle % 2 != 1) {
    }
    // DISPARI FACCIO QUESTO
    else {
        // PRENDO LA SINGOLA RIGA
        var row = spazio.repeat(n_spazi) + simbolo.repeat(n_stelle);
       
        //SE NELLA RIGA  SONO PRESENTI PIU' ASTERISCHI
        if (n_stelle > 1) {
            var row_mod; // CONTROLLA RIGA PER RIGA
            var somma_stringhe = ""; // SOMMA CARATTERE PER CARATTERE
                
            // FACCIO UNA SCAN DELLA RIGA IN BASE ALLA SUA LUNGHEZZA
            for (var p = 0; p < row.length; p++) {  /// INIZIO FOR
                // RANDOMIZZO UNA SCELTA DI ELEMENTI PER RIGA = IN QUESTO CASO POSSONO USCIRMI : "*" o "O"
                var scelta = Math.floor(Math.random() * randomsimboli.length);
                
                // IN BASE ALLA SCELTA
                switch (scelta) {
                    case scelta:
                             // PRENDO CARATTERE A POSIZIONE CON  INDICE P  
                             row_mod = row.charAt(p);
                            //  TEST  <----  console.log("indice : " + p + " : " + row_mod);
                           
                             // SE NON C'è UNO SPAZIO 
                             if (row_mod != " ") {
                                        //CARATTERE PRESO = PRENDE SIMBOLO GENERATO DAL RANDOM
                                        row_mod = randomsimboli[scelta];
                            
                                if(row_mod == "*")
                                        //SE E' UNA STELLA , SOMMO LA STRINGA E LO COLORO DI VERDE
                                        somma_stringhe += colors.green(row_mod);
                                else
                                        //SE E' UNA PALLINA , SOMMO LA STRINGA E LO COLORO DI BLU
                                        somma_stringhe += colors.blue(row_mod);
                             }
                                else {
                                        //SE E' UNO SPAZIO, SOMMO LA STRINGA
                                         row_mod = spazio;
                                         somma_stringhe += row_mod;
                             } 

                        break;

                } // FINE SWITCH

            } // FINE FOR
            console.log(somma_stringhe);/// STAMPO LA STRINGA
        } // FINE IF SE E' MAGGIORE DI 1
            else {
                    // SE INVECE E' MINORE O UGUALE A 1 
                    // STAMPA LA PRIMA RIGA 
                    console.log(spazio.repeat(n_spazi) + colors.yellow(stellina.repeat(n_stelle)));
                 }
    
                      //console.log(spazio.repeat(n_spazi).length + simbolo.repeat(n_stelle).length);
    }

}//FINE FOR ( PARTE SUPERIORE ALBERO)

//TRONCO ALBERO
console.log(spazio.repeat(n_stelle / 3) + colors.red(tronco.repeat(n_stelle / 3)));
console.log(spazio.repeat(n_stelle / 3) + colors.red(tronco.repeat(n_stelle / 3)));
console.log(spazio.repeat(n_stelle / 3) + colors.red(tronco.repeat(n_stelle / 3)));







