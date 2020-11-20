const http = require ('http')

http.createServer(function(req, res){
    res.writeHead(200,{"content-type":"text/plain:charset=utf-8"})
    res.end("Mi servidorr de JS funcionaa yess funcii")
}).listen(3030, 'localhost', () => console.log ('Servidor funciona en el puerto 3030'))