const http = require('http');


http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Luis',
        edad: 32,
        url: req.url
    };
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log('Listening in port 8080');