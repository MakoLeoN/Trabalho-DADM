var http = require('http');
var url = require('url');
var fs = require('fs');
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/Trabalho DADM'));

http.createServer(
    function(req, res) {
        var endereco = url.parse(req.url, true);
        var arquivo = '.' + endereco.pathname;

        fs.readFile(arquivo,
            function(err, pagina) {
                if (err) {
                    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
                    res.write('<h1>Erro 404</h1>');
                    res.write('<p>Página não encontrada</p>');
                    res.write('<p>Digite /Anilhas.html na URL.</p>'); 
                    res.end();   
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    res.write(pagina);
                    res.end();
                }   
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');