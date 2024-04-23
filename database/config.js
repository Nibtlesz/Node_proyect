const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS);
        console.log("base de datos online");
    } catch (error) {
        console.log(error);
        throw new Error('Conexion a la base de datos fallida');
    }
}

module.exports = {
    dbConnection
}