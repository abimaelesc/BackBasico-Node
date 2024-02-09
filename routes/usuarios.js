const { Router } = require('express')
const { peticionGetUsuarios, peticionPutUsuarios, peticionPosttUsuarios, peticionDeleteUsuarios } = require('../controllers/usuarios')

const router = Router()

router.get('/', peticionGetUsuarios)
router.put('/:id', peticionPutUsuarios)
router.post('/', peticionPosttUsuarios)
router.delete('/', peticionDeleteUsuarios)

module.exports = router