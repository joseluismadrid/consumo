const {Schema, model }=require('mongoose')

const AcudientesSchema = ({
    nombreCompleto:{
        type:String,
        unique:true,
        required:[true,'El nombre  es requerido'],
    },
    tipoDocumento:{
        type:String,
        required:[true,'El  tipo documento es requerido'],

    },
    documento:{
        type:String,
        unique:true,
        required:[true,'El documento  es requerido'],
    },
    parentesco:{
        type:String,
        required:[true,' El parentesco es requerida'],
    },
    estado:{
        type:Boolean,  
        default:true,
    },
    telefono:{
        type:String,
        required:[true,' El parentesco es requerida'],
        min:[7,'El telefono debe contener mínimo 7 caracteres'],
        max:[10,'El telefono debe contener máximo 10 cararacteres']

    }, 
    fechaNacimiento:{
        type:String,
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
    }
})

module.exports = model('Acudientes',AcudientesSchema)