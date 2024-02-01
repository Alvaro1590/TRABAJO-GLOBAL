const Usuarios = require("../../modelos/Usuarios");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Usuarios.findOne({ email });

        if (!user || !user.activo) {
            return res.status(404).send('Disculpa pero te encuentras bloqueado o hay campos erroneos');
        }

        const result = await user.isCorrectPassword(password);

        if (result) {
            const { firstName, lastName, _id: id, admin, adress } = user;

            const token = jwt.sign({ email }, "torombolo", {
                expiresIn: "10h"
            });

            res.json({ email, token, firstName, lastName, id, admin, adress });
        } else {
            res.status(500).send("Correo y/o contraseña incorrecta");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
};

module.exports = auth;
