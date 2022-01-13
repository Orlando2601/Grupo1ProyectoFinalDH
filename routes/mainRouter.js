const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const mainController = require('../controllers/mainController');
router.get('/', mainController.home)
router.get('/login', mainController.login)
router.get('/registro', mainController.registro)
router.get('/crear-producto', mainController.crearProducto)
router.get('/editar-producto', mainController.editarProducto)
router.get('/comida', mainController.comida)
router.get('/detalle/:referencia', mainController.detalle)
module.exports = router;