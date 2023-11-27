const {Router} = require('express');

const route = Router();

const {getAcudiente,postAcudiente,putAcudiente,deleteAcudiente} = require('../controller/acudientes') 

route.get('/',getAcudiente),
route.post('/',postAcudiente),
route.put('/',putAcudiente),
route.delete('/',deleteAcudiente)

module.exports = route 