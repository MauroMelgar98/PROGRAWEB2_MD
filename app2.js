const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const productos = [
    {
        id:1,
        nombre:"Laptop Toshiba",
        precio:10000
    },
    {
        id:2,
        nombre:"Monitor",
        precio:2500
    }
];
app.get("/", (req,res)=>{
    res.send("API PROGRA WEBII");
});
app.get("/api/productos", (req,res)=>{
    res.json(productos);
});
app.get("/api/productos/:id", (req,res)=>{
    const id = Number(req.params.id);
    const producto = productos.find(
        producto => producto.id === id
    );
    if (!producto) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }
    res.json(producto);
});
app.post("/api/productos", (req,res)=>{
    const nuevoProducto = {
        id: productos.length + 1,// generamos el id tomando el ultimo y sumando 1
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
//----------------------
//GET/api/productos
//GET/api/productos/:id
//POST/api/productos
//----------------------

//codigos   de estado HTTP
 //200 -> OK correcto
 // 201 -> creado
 // 400 -> error del cliente
 // 401 -> no autenticado
 // 403 -> no autorizado
 // 404 -> no encontrado
 // 500 -> error del servidor
 //HACER SU SERVIDOR CON NODE Y EXPRESS PARA CAPTURAR
 // DATOS DE CLIENTE CON ID, NOMBRE, CORREO, TELEFONO Y DIRECCION