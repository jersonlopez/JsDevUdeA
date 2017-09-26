var http = require('http');
var server = http.createServer();
function control(petic, resp) {
console.log('Petición recibida'); //Texto que saldrá por consola
resp.writeHead(200, {'content-type': 'text/plain'});
resp.write('Hola, Mundo!');
resp.end();
}
server.on('request', control).listen(8080);
console.log('Servidor inicializado'); //Texto que saldrá por consola
