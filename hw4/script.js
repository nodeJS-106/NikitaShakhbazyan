const fs = require('fs');
const http = require('http');
const host = 'localhost'
const port = 4040

const user = {
    "name": "John",
    "age": 15
};

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === '/user') {
        fs.writeFile('data.json', JSON.stringify(user), (err) => {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/json'});
                res.end('Server Error!');
                return;
            }
            console.log("Datsa written to data.json");
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Data has been written to data.json');
        });
    } else if(req.method === "DELETE" && req.url === '/user') {
        fs.unlink('data.json',(e) => {
            if(e) {
                console.log(e)
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Errorr');
                return;
            }
            console.log("Data file has been deleted");
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Data file has been deleted from file');
        })
    } else if (req.method === "GET" && req.url === '/getUsers') {
        fs.readFile('data.json', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading file');
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(data);
            }
        });
    }    
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
// postman-ში გავუშვი რექუესტი პოსტ მეთოდით და დაიწერა მეორე ფაილში, მგონი სწორად მივხდი დავალებას ხო?
