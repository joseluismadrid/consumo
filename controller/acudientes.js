const { response } = require('express')

const acudientes = require('../models/acudientes')

const getAcudiente = async (req, res) => {
    const acudiente = await acudientes.find();//Obtener todos los documentos de una coleccion
    res.json({
        msg: acudiente
    })
};

const postAcudiente = async (req, res) => {
    const datos = req.query //capturar datos de la postman
    let mensaje = 'Inserción exitosa'
    try {
        const acudiente = new acudientes(datos)
        await acudiente.save() //guarda en la base de datos
        console.log(acudiente)
    } catch (error) {
        mensaje = error
        console.log(mensaje)
    }
    res.json({
        msg: mensaje
    })
};
const putAcudiente = async (req, res) => {
    const { nombreCompleto, tipoDocumento,documento,parentesco,estado,telefono,fechaNacimiento,direccion,ciudad,observacion } = req.query //desetructurar 
    let mensaje = 'Actualizacion Exitosa'
    try {
        const acudiente = await acudientes.findOneAndUpdate({ nombreCompleto:nombreCompleto },  {tipoDocumento:tipoDocumento,documento:documento,parentesco:parentesco,estado:estado,direccion:direccion,ciudad:ciudad,observacion} )   
         
    } catch (error) {
        mensaje = error;
    }
    res.json({
         msg: mensaje
    })

}
const deleteAcudiente = async (req, res) => {
    const { nombreCompleto } = req.query //desetructurar 
    let mensaje = 'Eliminacion Exitosa'
    try {
        const acudiente = await acudientes.findOneAndDelete({ nombreCompleto: nombreCompleto })
        console.log(acudiente)
    } catch (error) {
        mensaje = error;
    }
    res.json({
        "msg": mensaje
    })

}
module.exports = {
    getAcudiente,
    postAcudiente,
    putAcudiente,
    deleteAcudiente

}