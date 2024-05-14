const {response} = require('express');
const Usuario = require('../models/usuarios');

const getUsuarios = (req, res = response) =>{
    res.status(200).json({ msg: 'Peticion GET realizada con exito'});
}

const postUsuarios = async(req, res = response) =>{

    const { nombre, rol, estado, correo, password, google } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol, estado, google } );
    
    res.status(200).json({ 
        msg: 'Peticion POST realizada',
        nombre,
        rol,
        estado
    });

    await usuario.save();
}

const putUsuarios = (req, res = response) =>{
    res.status(200).json({ msg: 'Peticion PUT realizada con exito'});
}

const deleteUsuarios = (req, res = response) =>{
    res.status(200).json({ msg: 'Peticion DELETE realizada con exito'});
}

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}