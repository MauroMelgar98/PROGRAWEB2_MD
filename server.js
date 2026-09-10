const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Permite que el frontend React se conecte al servidor.
app.use(cors());

// Permite recibir datos en formato JSON.
app.use(express.json());

// Almacenamiento temporal de clientes.
const clientes = [];

// Ruta de prueba.
app.get("/", (req, res) => {
  res.json({
    mensaje: "Servidor de clientes funcionando correctamente",
  });
});

// Obtener todos los clientes.
app.get("/api/clientes", (req, res) => {
  res.status(200).json(clientes);
});

// Capturar y guardar los datos de un cliente.
app.post("/api/clientes", (req, res) => {
  const { id, nombre, correo, telefono, direccion } = req.body;

  if (!id || !nombre || !correo || !telefono || !direccion) {
    return res.status(400).json({
      mensaje: "Todos los campos son obligatorios",
    });
  }

  const idNormalizado = String(id).trim();
  const correoNormalizado = String(correo).trim().toLowerCase();

  const clienteExistente = clientes.some(
    (cliente) => cliente.id === idNormalizado
  );

  if (clienteExistente) {
    return res.status(409).json({
      mensaje: "Ya existe un cliente con ese ID",
    });
  }

  const nuevoCliente = {
    id: idNormalizado,
    nombre: String(nombre).trim(),
    correo: correoNormalizado,
    telefono: String(telefono).trim(),
    direccion: String(direccion).trim(),
  };

  clientes.push(nuevoCliente);

  console.log("Cliente capturado:");
  console.log(nuevoCliente);

  res.status(201).json({
    mensaje: "Cliente registrado correctamente",
    cliente: nuevoCliente,
  });
});

// Eliminar un cliente por su ID.
app.delete("/api/clientes/:id", (req, res) => {
  const indice = clientes.findIndex(
    (cliente) => cliente.id === req.params.id
  );

  if (indice === -1) {
    return res.status(404).json({
      mensaje: "Cliente no encontrado",
    });
  }

  const clienteEliminado = clientes.splice(indice, 1)[0];

  res.status(200).json({
    mensaje: "Cliente eliminado correctamente",
    cliente: clienteEliminado,
  });
});

// Encender el servidor.
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});