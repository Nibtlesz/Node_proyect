const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre esobligatorio"]
    },
    correo: {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatorio"]
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ["ADMINISTRADOR", "USUARIO"]
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        deafult: false
    }
});
usuarioSchema.methods.toJSON = function () {
    const { __v, password, ...usuario} = this.ToObject();
    return usuario;
}

module.exports = model("Usuarios", usuarioSchema);