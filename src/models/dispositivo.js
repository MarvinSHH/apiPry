const mongoose=require('mongoose')
const dispositivoSchema=mongoose.Schema(
    {
        modelo:{type:String,require:false},
        estado:{type:String,require:false},
    }
)
module.exports=mongoose.model('Pregunta',dispositivoSchema)