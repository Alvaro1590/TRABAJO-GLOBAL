const { Router } = require('express');
const Usuarios = require('../../modelos/Usuarios');

const registro = Router();

registro.post('/', async (req, res, next) => {
    const { firstName, lastName, email, password, adress, phone } = req.body;

    try {
        const usuarioExistente = await Usuarios.findOne({ email });

        if (usuarioExistente) {
            res.status(404).send("El usuario ya existe");
        } else {
            const user = new Usuarios({ firstName, lastName, email, password, adress, phone });

            try {
                await user.save();
                res.send("Bienvenido!");
            } catch (error) {
                res.status(500).send("Error al registrar al usuario");
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error en el servidor");
    }
});

module.exports = registro;
