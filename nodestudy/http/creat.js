const http = require('http');

const server = http.createServer((request, response)=>{
    response.end('Hello HTTP Server');
})

server.listen(9000,() => {
    console.log('server start...')
})
