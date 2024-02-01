const mongoose = require("mongoose");
require('dotenv').config();
const { URL_MONGO } = process.env;

(async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://alvarolopez85xz:alvarolopez85xz@cluster0.d9wbk4x.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conectada la base de datos:', db.connections[0].name);
    } catch (error) {
        console.error(error);
    }
})();
