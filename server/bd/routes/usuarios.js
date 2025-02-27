const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas de usuarios
router.get('/', usuariosController.getAllUsuarios);
router.get('/:id', usuariosController.getUsuarioById);
router.post('/', usuariosController.createUsuario);
router.put('/:id', usuariosController.updateUsuario);
router.delete('/:id', usuariosController.deleteUsuario);

// Ruta de inicio de sesión
router.post('/login', usuariosController.loginUsuario);
router.post('/forgot-password', usuariosController.forgotPassword);
module.exports = router;
