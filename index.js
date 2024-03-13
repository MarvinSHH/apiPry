const express=require('express')
const mongoose=require('mongoose')

require('dotenv').config()

const app =express()
const port= process.env.PORT||3000

const device=require('./src/routes/dispositivo')
const product=require('./src/routes/productos')
const typeUser=require('./src/routes/tipoUsuario')
const user=require('./src/routes/usuarios')



//midlewares
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({"response":"Prueba de Device"})
})

app.use('/api/',device)
app.use('/api/',product)
app.use('/api/',typeUser)
app.use('/api/',user)


//coneccion con la base de dato
mongoose.connect(process.env.mongouri)
.then(()=>console.log('conectado a la base'))
.catch(error=>console.log(error))
app.listen(port,()=>{
    console.log('corriendo en el puerto '+port)
})
