var http = require (http)
var a = 10
var b = 20
var msg
if(c==30){
    msg = "sum is not 30"
}else{
    msg = "sum is not 30"
}

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("A value is"+a)
    res.write("<br/>B value is" +b)
    res.write("<br/><b>Sum is ${a+b}</b>")
    res.end("<br/>"+msg + "<br/>Done")

}).listen(4001)

console.log("Server is online on http://127.0.0.1:4001")