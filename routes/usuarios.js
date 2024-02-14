const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar_campos");
const {
  roleValida,
  validarCorreo,
  existeUsuarioXiD,
} = require("../helpers/db_validatos");

const {
  peticionGetUsuarios,
  peticionPutUsuarios,
  peticionPosttUsuarios,
  peticionDeleteUsuarios,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", peticionGetUsuarios);

router.put(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existeUsuarioXiD),
    check("rol").custom(roleValida),
    validarCampos,
  ],
  peticionPutUsuarios
);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("correo").custom(validarCorreo),
    check(
      "password",
      "El password es obligatorio y un minimo de 6 caracteres"
    ).isLength({ min: 6 }),

    // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROL', 'USUARIO_ROL']),
    check("rol").custom(roleValida),
    validarCampos,
  ],
  peticionPosttUsuarios
);

router.delete("/:id", [
  check("id", "No es un id valido").isMongoId(),
  check("id").custom(existeUsuarioXiD),
  validarCampos
], peticionDeleteUsuarios);

module.exports = router;
