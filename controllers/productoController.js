//GET Conectado a SQL SERVER
const Producto = require('../models/Producto');
const listarProductos = async (req, res) => {
    try {
        const productos = 
        await Producto.findAll(); //Porque estamos esperando SQL SERVER responda
        res.status(200).json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al obtener los productos"
        });
    }
}
module.exports = {
    listarProductos
}