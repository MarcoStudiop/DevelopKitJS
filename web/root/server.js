//                     (ASYNCRONOUS MODULE DEFINE)
//#############################################################################//
if (typeof define !== 'function') {
    var define = require('./lib/node_modules/amdefine/amdefine')(module);

}
//#############################################################################//
// -DEFINE <--- SERVE A CARICARE I MODULI
//#############################################################################//
// SYNTAX DEFINE(MODULI,CHIAMATA)
//#############################################################################//
define(['http', 'fs', 'path', 'url'], function (http, fs, path, url) {

    //HTTP-SERVER  (request,response)                               LOCALHOST:8080
    //#############################################################################//
    const Server = (req, res) => {
     
            if (req.method == 'GET' && req.url == '/') {
                res.writeHead(200, {"Content-Type": "text/html"});
                fs.createReadStream("./web/root/index.html", "UTF-8").pipe(res);
            } else if (req.method == 'GET' && req.url == '/resource.html') {
                res.writeHead(200, {"Content-Type": "text/html"});
                fs.createReadStream("./web/root/resource.html", "UTF-8").pipe(res);
            } 
            else if (req.method == 'GET' && req.url == '/index.html') {
                res.writeHead(200, {"Content-Type": "text/html"});
                fs.createReadStream("./web/root/index.html", "UTF-8").pipe(res);
            }
           else if (req.method == 'GET' && req.url == '/css/custom.css') {
                res.writeHead(200, {"Content-Type": "text/css"});
                fs.createReadStream("./web/root/css/custom.css", "UTF-8").pipe(res);
            }
            else if (req.method == 'GET' && req.url == '/css/bootstrap-grid.css') {
                res.writeHead(200, {"Content-Type": "text/css"});
                fs.createReadStream("./web/root/css/bootstrap-grid.css", "UTF-8").pipe(res);
            } 
            else if (req.method == 'GET' && req.url == '/css/style.css') {
                res.writeHead(200, {"Content-Type": "text/css"});
                fs.createReadStream("./web/root/css/style.css", "UTF-8").pipe(res);
            }           
            else if (req.method == 'GET' && req.url == '/js/bootstrap.min.js') {
                res.writeHead(200, {"Content-Type": "text/javascript"});
                fs.createReadStream("./web/root/js/bootstrap.min.js", "UTF-8").pipe(res);
            }
            else if (req.method == 'GET' && req.url == '/js/require.js') {
                res.writeHead(200, {"Content-Type": "text/javascript"});
                fs.createReadStream("./web/root/js/require.js", "UTF-8").pipe(res);
            }
            else if (req.method == 'GET' && req.url == '/js/jquery.min.js') {
                res.writeHead(200, {"Content-Type": "text/javascript"});
                fs.createReadStream("./web/root/js/jquery.min.js", "UTF-8").pipe(res);
            }
        
            else {
                errore404(res);
            }
        
        /*
                if(req.url == "/"){
                     fs.readFile("index.html", "UTF-8",(err, html) =>{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(html);
                    res.end();
                     });
                    }
                     else if(req.url =="resource.html"){
                         fs.readFile("resource.html", "UTF-8", function(err, html){
                            res.writeHead(200, {"Content-Type": "text/html"});
                            res.end(html);
                     });
                    }
                    
                       */
    };

    //#################################404 ERROR###########################################//
    function errore404(res) {
        res.writeHead(404, {
            "Content-type": "text/plain"
        });
        res.write("Sei nella merda, la pagina non è stata trovata");
        res.end();
    }
    // IN ASCOLTO SULLA PORTA 8080
    //#############################################################################//
    http.createServer(Server).listen(3000);
});
console.log("Server is now running");