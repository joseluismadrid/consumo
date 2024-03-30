const {Schema, model }=require('mongoose')

const AcudientesSchema = ({
    nombre:{
        type:String,
        unique:true,
        required:[true,'El nombre  es requerido'],
    },
    apellido:{
        type:String,       
        required:[true,'El Apellido es requerido'],
    },
    tipoDocumento:{
        type:String,
        required:[true,'El  tipo documento es requerido'],

    },
    documento:{
        type:Number,
        unique:true,
        required:[true,'El documento  es requerido'],
    },
    parentesco:{
        type:String,
        required:[true,' El parentesco es requerida'],
    },
    estado:{
        type:String,
        required:[true,' El estado es requerida'],
        
    },
    telefono:{
        type:Number,
        required:[true,' El parentesco es requerida'],
       
    }, 
    fechaNacimiento:{
        type:Date,
        required:[true,' La fecha de nacimiento es requerida'],

    },
    direccion:{
        type:String,
        required:[true,' La direccion es requerida'],
    },
    ciudad:{
        type:String,
        required:[true,' la ciudad  es requerida'],
    },
    observacion:{
        type:String,
        required:[true,' La observacion  es requerida'],
        min:[100,'La  observacion debe contener mínimo 100 caracteres'],
        max:[500,'La  observacion debe contener máximo 500 cararacteres']
    },
   
})

module.exports = model('acudientes',AcudientesSchema)