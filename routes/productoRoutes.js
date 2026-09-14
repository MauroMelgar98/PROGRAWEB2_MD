const express = require("express");
const router = express.Router();
const { 
    listarProductos 
    } = require("../controllers/productoController");

router.get('/productos', listarProductos);
module.exports = router;