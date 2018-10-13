//LIBRERIA HTTP INCLUSA
var http = require('../DevelopKitJS/js/lib/node_modules/http-server');
//LIBRERIA FILE-SYSTEM INCLUSA
var fs = require('../DevelopKitJS/js/lib/node_modules/file-system');

/**
 * CREAZIONE WEB SERVER TEMPORANEO SU LOCALHOST:PORTA(8080) // Esegui e digita  =>  http://localhost:8080/Index.html
 */
http.createServer((req, res) => {

    //LEGGO IL FILE INDEX.HTML
    fs.readFile("index.html", (err,data) => {
        //TIPO DEL CONTENUTO DEL MIO WEB SERVER => OVVIAMENTE TESTO O HTML
        res.writeHead(200, {'Content-Type': 'text/html'});
        //SCRIVE IL CONTENUTO PAGINA INDEX.HTML
        res.write(data);
        //CONCLUDE L'OPERAZIONE
        res.end();

    });

}).listen(8080); // IN ASCOLTO SULLA PORTA 8080 (PUOI CAMBIARLA..PURCHÉ NON SIA UNA DI QUELLE FONDAMENTALI)