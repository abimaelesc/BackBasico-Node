const { response, request } = require("express");
const bcrypt = require("bcrypt");

const Usuario = require("../models/usuario");

const peticionGetUsuarios = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  // const usuarios = await Usuario.find({ estado: true })
  //   .skip(desde)
  //   .limit(limite);
  // const total = await Usuario.countDocuments({ estado: true });

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments({ estado: true }),
    Usuario.find({ estado: true }).skip(desde).limit(limite)
  ]);
  res.json({
    total,
    usuarios
  });
};

const peticionPosttUsuarios = async (req = request, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Encriptar contraseña
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  usuario.password = bcrypt.hashSync(password.toString(), salt);

  // Guardar en DB
  await usuario.save();

  res.json({
    usuario,
  });
};

const peticionPutUsuarios = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  if (password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    resto.password = bcrypt.hashSync(password.toString(), salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    usuario,
  });
};

const peticionDeleteUsuarios = async (req = request, res = response) => {
  const { id } = req.params

  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false })
  res.json({
    usuario
  });
};

module.exports = {
  peticionGetUsuarios,
  peticionPutUsuarios,
  peticionPosttUsuarios,
  peticionDeleteUsuarios,
};
