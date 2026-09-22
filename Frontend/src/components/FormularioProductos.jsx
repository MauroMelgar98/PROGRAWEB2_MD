import { useState } from "react";

function FormularioProducto() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="mb-3">Registrar producto</h4>

        <div className="mb-3">
          <label className="form-label">Nombre</label>

          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>

          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>

          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Guardar producto</button>
      </div>
    </div>
  );
}

export default FormularioProducto;
