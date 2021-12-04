
const express = require('express')
const app = express()
const port = 5000
//settings---------------------------------
app.set("nombre variable","el valor de la variable") //clave valor
app.set("view engine","ejs")//estableciondo motor de plantillas con clave valor


//middlewares------------------------------
function logger(req,res,next){
    //se puede usar para validar antes de que se valla a una de las rutas
    console.log(`request recibido:${req.protocol}//${req.get("host")}${req.originalUrl}`);
    next();
}
app.use(express.json()) //para poder visualizar lo que manda el cliente por req
app.use(logger)//por aqui se reciben todas las solicitudes, sim importar si estab bien o mal configuradas

//routes-----------------------------------
//http://localhost:5000/get desde navegador
app.get('/get', (req, res) => {

    console.log("req get:",req.body) //lo que manda el cliente, usando thunder o postman o navegador
    res.send('peticion get recibida por el servidor') //lo que se le manda al cliente y lo ve en el navegador
  
})

//http://localhost:5000/ejs desde navegador, probando motor de plantillas
app.get('/ejs', (req, res) => {

    console.log("req get:",req.body) //lo que manda el cliente, usando thunder o postman o navegador
    cad="una frase que mando el cliente por req"//suppniendo que mando algo el cliente
    res.render("index.ejs",{data:cad}) //lo que se le manda al cliente y lo ve en el navegador
  
})

//http://localhost:5000/post desde thunder client o postman, seleccionando el metodo post
app.post('/post', (req, res) => {
    console.log("req post:",req.body) //lo que manda el cliente, usando thunder o postman
    res.send('peticion post recibida por el servidor') //lo que ve el cliente
    console.log()
  })


//http://localhost:5000/put desde thunder client o postman, seleccionando el metodo put
app.put('/put', (req, res) => {
    console.log("req put:",req.body) //lo que manda el cliente, usando thunder o postman
    res.send('peticion put recibida por el servidor') //lo que ve el cliente
    console.log()
  })


//http://localhost:5000/delete desde thunder client o postman, seleccionando el metodo delete
app.delete('/delete', (req, res) => {
    console.log("req delete:",req.body) //lo que manda el cliente, usando thunder o postman
    res.send('peticion delete recibida por el servidor') //lo que ve el cliente
    console.log()
  })


app.use(express.static('public')) //se va a ejecutar si no pas en ninguna de las rutas


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(app.get("nombre variable"))
})


/* metodos HTTP mas usados

GET: sacar recursos del backend/API
-cuando consultamos una pagina web desde el navegador

POST: para guardar recursos en el backend
-cuando se llena un formulario desde el navegador, viaja mas segura

PUT: actualizar recursos del backend
-actualizar informacion, modificar recursos de una base de datos
-hacer un update

DELETE: para eliminar recursos del backend
-eliminar registros de una bace de datos

*/
  