const {Router} = require('express');
const { deleteUsuarios, postUsuarios, getUsuarios, putUsuarios} = require('../controllers/usuarios.controllers');
const routes = Router();

routes.get('/', getUsuarios);
routes.post('/', postUsuarios);
routes.put('/:id', putUsuarios);
routes.delete('/:id', deleteUsuarios);


module.exports = routes;