//express con node
const express = require('express')
const app = express()
const port = 3002
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')
app.set('views',__dirname + '/views')

//Rutas
app.use('/',require('./router/Rutas'));

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Servidor Iniciado con el puerto ${port}`)
})




//express con node
/*const http=require('http')
function handleServer(req,res){
res.write('<h1>Holaaaa y Adios</h1>')
res.end()
};

const server=http.createServer(handleServer).listen(3008)*/




/*const { Console } = require('console');
const http=require('http')
const host="localhost"
const port="6666"

const requestListener=function(req,res){
    res.writeHead(200);
    Response.apply("Hello,Server");
};

const server=http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`servidor iniciado en http://${host}:${port}`);
})*/





/*const ope=require('./ejercicio1.js')

ope.sumar(10,2);
ope.restar(10,2);
ope.multiplicacion(10,2);
ope.division(10,2);
*/

