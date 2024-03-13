const express=require('express')
const esquema=require('../models/usuarios')

const router=express.Router()

router.get('/usuarios/x',(req,res)=>{
    res.json({"response":"Prueba Users"})
})

router.post('/usuarios',(req,res)=>{
    const us= esquema(req.body);
    us.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//leer usuarios
router.get('/usuarios',(req,res)=>{
    esquema.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//buscar usuario
router.get('/usuarios/:id',(req,res)=>{
    const {id}=req.params
    esquema.findById(id)
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//busqueda por elmail
router.get('/usuarios/correo/:correo',(req,res)=>{
    const {correo} = req.params
    esquema.findOne({ correo })
      .then(data => res.json(data))
      .catch(error => res.json({message:error}))
  })
  

//actualizar usuario
router.put('/usuarios/:id',(req,res)=>{
    const{id}=req.params;
    const{nombre,apellido,correo,contraseña,telefono,tipo,preguntaRecuperacion,respuestaPregunta,codigoRecuperacion,dispositivo}=req.body
    esquema
    .updateOne({_id:id},{$set:{nombre,apellido,correo,contraseña,telefono,tipo,preguntaRecuperacion,respuestaPregunta,codigoRecuperacion,dispositivo}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar usuario
router.delete('/usuarios/:id',(req,res)=>{
    const{id}=req.params;
    esquema.deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

module.exports=router