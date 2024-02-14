const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es Obligatorio'],
        unique: true
    },
    correo: {
        type: String,
        required: [true, 'El corroe es reuqerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
        unique: true
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROL', 'USUARIO_ROL']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: true
    }
})

UsuarioSchema.methods.toJSON = function(){
    const { __v, password, ...usuario} = this.toObject()
    return usuario
}

module.exports = model('Usuario', UsuarioSchema)