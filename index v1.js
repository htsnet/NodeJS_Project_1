const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// criar novo aarquivo
fs.writeFile('danki.txt', 'teste danki code', function(err) {
    if (err) throw err;
    console.log('o arquivo foi gravado');
})

//criar novo arquivo ou complementa informação
fs.appendFile('danki.txt', '\noutra informação', (err) => {
    if (err) throw err;
    console.log('o arquivo foi gravado');
})

const server = http.createServer((req, res)=>{
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello world');

    fs.appendFile('danki.txt', '\nmais informações', (err) => {
        if (err) throw err;
        console.log('mais informações');
    })

    fs.readFile('index.html', function(err,data) {
        res.writeHead(
            200,
            {'Content-Type':'text/html'});
            res.write(data);
            return res.end();

    });
})

server.listen(port, hostname, () => {
    console.log('Servidor está rodando...');
})