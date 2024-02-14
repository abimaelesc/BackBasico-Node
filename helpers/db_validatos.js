const Role = require("../models/role");
const Usuario = require("../models/usuario");

const roleValida = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
  }
};

const validarCorreo = async (correo = "") => {
  const existeCorreo = await Usuario.findOne({ correo });
  if (existeCorreo) {
    throw new Error(`El correo: ${correo} ya se enecunetra registrado`);
  }
};

const existeUsuarioXiD = async (id) => {
  const existeId = await Usuario.findById(id);
  if (!existeId) {
    throw new Error(`El id: ${id} no existe`);
  }
};

module.exports = {
  roleValida,
  validarCorreo,
  existeUsuarioXiD,
};
