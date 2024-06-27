const http = require('http');
const fs = require('fs')

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    let html = fs.readFileSync(__dirname + '/table.html')
    response.end(html);
});

server.listen(9000, () => {
    console.log('server start...')
});
