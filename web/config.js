//#############################################################################//
var requirejs = require('../web/root/lib/node_modules/requirejs/bin/r.js');
//#############################################################################//
//                     CONFIG  SERVER RESOURCE
//#############################################################################//

//#############################################################################//
// BASE URL : (DIRECTORY PRINCIPALE)
// CONFIG :  A SINISTRA <-- ID DEL MODULO , A DESTRA <--- PATH DEL MODULO//
//#############################################################################//
requirejs.config({

    paths: {
        //# SOURCE REQUIREJS
        "requirejs": 'lib/node_modules/requirejs',
        //# SOURCE HTTP
        "http": 'lib/node_modules/http-server/lib/http-server',
        //# SOURCE FILE-SYSTEM
        "fs": 'lib/node_modules/file-system/file-system',
        //# SOURCE MAIN (YOUR MAIN)
        "main": './root/server',
        //# SOURCE PATH
        "path": 'lib/node_modules/path/path',
        //# SOURCE URL
        "url": 'lib/node_modules/url-join/url-join',

    }
});
//#############################################################################//
//                          LOADING  MAIN.JS
//#############################################################################//
requirejs(['main']);
//#############################################################################//