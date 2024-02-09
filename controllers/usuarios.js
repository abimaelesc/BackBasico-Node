const { response, request } = require('express')

const peticionGetUsuarios = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query
    res.json({
        message: 'app Get - Controlador',
        q,
        nombre,
        apikey
    })
}

const peticionPutUsuarios = (req = request, res = response) => {
    const id = req.params.id
    res.json({
        message: 'app Put - Controlador',
        id: id
    })
}

const peticionPosttUsuarios = (req = request, res = response) => {
    const body = req.body

    res.json({
        message: 'app Post - Controlador',
        data: body
    })
}

const peticionDeleteUsuarios = (req = request, res = response) => {
    res.json({
        message: 'app Delete - Controlador'
    })
}

module.exports = {
    peticionGetUsuarios,
    peticionPutUsuarios,
    peticionPosttUsuarios,
    peticionDeleteUsuarios
}