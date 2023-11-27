const express = require('express');
const bodyparser = require ('body-parser')
const cors = require('cors');
const { dbConection } = require('../database/acudientes')


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT 
        this.acudientePath = '/acudiente'
        this.routes();
        this.conectarDB();
        this.middelwares();
    }

    listen(){
        this.app.listen(
            this.port,()=>{
                console.log('listening on port '+this.port)
            }
        )
    }
    routes(){
        this.app.use(this.acudientePath, require('../routes/acudientes'))
    
    }
    middelwares(){
        this.app.use(cors())
        this.app.use(bodyparser.json())
    }
    async conectarDB(){
        await dbConection();
    }
}
module.exports = {Server}