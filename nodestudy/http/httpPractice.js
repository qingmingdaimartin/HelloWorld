const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`
    <!DOCTYPE html>
    <html lang="en-US">
    <head>
        <title>Page Title</title>
        <style>
            td {
                padding: 20px 40px;
            }
            table tr:nth-child(odd) {
                background: #aef;
            }
            table tr:nth-child(even) {
                background: #fcd;
            }
            table, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <table>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
        </table>
        <table>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
        </table>
        <table>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
        </table>
        <table>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
        </table>
    </body>
    </html>
    `);
});

server.listen(9000, () => {
    console.log('server start...')
});
