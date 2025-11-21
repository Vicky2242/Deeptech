const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res)=>{
    fs.readFileSync('file.html', (err, data)=>{
        if(err){
            res.writeHead(404, {'content-Type': 'text/plain'});
            res.end("file not found");
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});


//create a server

// http.createServer((req, res) => {

// 	res.write("Server Using HTTP Module!");
//     res.writeHead(200, {})
// 	res.write("Sample Http Server");
//     res.write(<p></p>)
// 	res.end();
// }).listen(3000);

server.listen(3000, () => {
    console.log('server running at the port http://localhost:3000');
});
