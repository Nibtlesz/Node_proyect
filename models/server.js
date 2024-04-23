const express = require('express');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.PORT = process.env.PORT;
        this.app = express();
        this.usuariosPath = '/api/users';

        this.dbConnection();

        this.midlewares();
        this.routes();
    }

    async dbConnection(){
        await dbConnection();
    }

    midlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    listen(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor corriendo en el puerto: ", this.PORT);
        });
    }
}

module.exports = Server;