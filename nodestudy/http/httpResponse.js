const http = require('http');

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.statusMessage = 'love';

    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('Hello HTTP Server');
})

server.listen(9000,() => {
    console.log('server start...')
})
