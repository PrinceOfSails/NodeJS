var http = require('http') //http is core module

http.createServer((req,res)=>{
    res.end("<h1>Hello sdjgh ggg Node </h1>")
}).listen(4000)

console.log("The server is open at http://127.0.0.1.4000")