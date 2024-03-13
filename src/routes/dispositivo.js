const express=require('express')
const esquema=require('../models/dispositivo')

const routerd=express.Router()

routerd.post('/dispositivo',(req,res)=>{
    const us= esquema(req.body);
    us.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//leer dispositivo
routerd.get('/dispositivo',(req,res)=>{
    esquema.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//buscar dispositivo
routerd.get('/dispositivo/:id',(req,res)=>{
    const {id}=req.params
    esquema.findById(id)
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//busqueda por elmail
routerd.get('/dispositivo/correo/:correo',(req,res)=>{
    const {correo} = req.params
    esquema.findOne({ correo })
      .then(data => res.json(data))
      .catch(error => res.json({message:error}))
  })
  

//actualizar dispositivo
routerd.put('/dispositivo/:id',(req,res)=>{
    const{id}=req.params;
    const{modelo,estado}=req.body
    esquema
    .updateOne({_id:id},{$set:{modelo,estado}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar dispositivo
routerd.delete('/dispositivo/:id',(req,res)=>{
    const{id}=req.params;
    esquema.deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

module.exports=routerd