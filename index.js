const express=require('express')
const mongoose=require('mongoose')

require('dotenv').config()

const dispositivoSchema=require('./src/routes/dispositivo')
const productoSchema=require('./src/routes/productos')
const tipoUsuarioSchema=require('./src/routes/tipoUsuario')
const usuarioSchema=require('./src/routes/usuarios')

const app =express()
const port= process.env.PORT||3000

//midlewares
app.use(express.json())

app.use('/api',dispositivoSchema)
app.use('/api',productoSchema)
app.use('/api',tipoUsuarioSchema)
app.use('/usuarios',usuarioSchema)

//rutas
// app.use('/api',usersquema)
// app.use('/api',moliendasquema)
// app.use('/api',presentacionsquema)
// app.use('/api',variedadsquema)
// app.use('/api',productossquema)
// app.use('/api',articlesSquema)

app.get('/',(req,res)=>{
    res.json({"response":"esto es mmi primer servidor"})
})
//coneccion con la base de dato
mongoose.connect(process.env.mongouri)
.then(()=>console.log('conectado a la base'))
.catch(error=>console.log(error))
app.listen(port,()=>{
    console.log('corriendo en el puerto '+port)
})
