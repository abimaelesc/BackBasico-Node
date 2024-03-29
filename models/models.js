const express = require('express')
const cors = require('cors')

class server {

    constructor() {
        this.app = express()
        this.puerto = process.env.PORT
        this.pathUsuarios = '/api/usuarios'

        // Midelware
        this.midelwares()

        // Rutas de mi aplicacion
        this.rutas()
    }

    midelwares() {
        // CORS
        this.app.use(cors())

        // Lectura y parceo del body
        this.app.use(express.json())

        // Directorio publico
        this.app.use(express.static('public'))
    }

    rutas() {
        this.app.use(this.pathUsuarios, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.puerto, () => {
            console.log(`El servidor esta en el puerto ${this.puerto}`)
        })
    }
}

module.exports = server