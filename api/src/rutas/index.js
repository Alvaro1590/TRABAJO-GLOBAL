const { Router } = require("express");

const registro = require("./Usuarios/postRegistroUsuario");
const auth = require("./Usuarios/postInicioSesionUsuario");
const { editarPassword } = require("./Usuarios/putPassword");

const router = Router();

// rutas para el modelo de Usuarios.
router.use('/registro', registro)
router.use("/autenticar", auth);
router.put("/usuarios/:_id", editarPassword);

module.exports = router