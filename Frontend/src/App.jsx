import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:3000/api/clientes";

const datosIniciales = {
  id: "",
  nombre: "",
  correo: "",
  telefono: "",
  direccion: "",
};

function App() {
  const [formulario, setFormulario] = useState(datosIniciales);
  const [clientes, setClientes] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);

  const obtenerClientes = async () => {
    try {
      const respuesta = await fetch(API_URL);
      if (!respuesta.ok) throw new Error("No se pudieron obtener los clientes");
      const datos = await respuesta.json();
      setClientes(datos);
    } catch {
      setMensaje("No se pudo conectar con Express. Verifica que el servidor esté encendido.");
      setTipoMensaje("error");
    }
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const registrarCliente = async (evento) => {
    evento.preventDefault();
    setMensaje("");
    setEnviando(true);

    try {
      const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formulario),
      });
      const resultado = await respuesta.json();
      if (!respuesta.ok) throw new Error(resultado.mensaje || "No se pudo registrar el cliente");
      setMensaje(resultado.mensaje);
      setTipoMensaje("exito");
      setFormulario(datosIniciales);
      await obtenerClientes();
    } catch (error) {
      setMensaje(error.message);
      setTipoMensaje("error");
    } finally {
      setEnviando(false);
    }
  };

  const eliminarCliente = async (id) => {
    try {
      const respuesta = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      const resultado = await respuesta.json();
      if (!respuesta.ok) throw new Error(resultado.mensaje || "No se pudo eliminar el cliente");
      setMensaje(resultado.mensaje);
      setTipoMensaje("exito");
      await obtenerClientes();
    } catch (error) {
      setMensaje(error.message);
      setTipoMensaje("error");
    }
  };

  return (
    <main className="contenedor">
      <header className="encabezado">
        <p className="etiqueta">Programación Web II</p>
        <h1>Registro de clientes</h1>
        <p>Formulario conectado con un servidor Node.js y Express.</p>
      </header>

      <div className="contenido">
        <section className="tarjeta">
          <h2>Datos del cliente</h2>
          <form onSubmit={registrarCliente}>
            <div className="campo">
              <label htmlFor="id">ID</label>
              <input id="id" name="id" value={formulario.id} onChange={manejarCambio} required />
            </div>
            <div className="campo">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} required />
            </div>
            <div className="campo">
              <label htmlFor="correo">Correo</label>
              <input id="correo" name="correo" type="email" value={formulario.correo} onChange={manejarCambio} required />
            </div>
            <div className="campo">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" name="telefono" type="tel" value={formulario.telefono} onChange={manejarCambio} required />
            </div>
            <div className="campo">
              <label htmlFor="direccion">Dirección</label>
              <textarea id="direccion" name="direccion" rows="3" value={formulario.direccion} onChange={manejarCambio} required />
            </div>
            <button type="submit" disabled={enviando}>
              {enviando ? "Registrando..." : "Registrar cliente"}
            </button>
          </form>
          {mensaje && <p className={`mensaje ${tipoMensaje}`}>{mensaje}</p>}
        </section>

        <section className="tarjeta lista-clientes">
          <h2>Clientes registrados: {clientes.length}</h2>
          {clientes.length === 0 ? (
            <p>No hay clientes registrados.</p>
          ) : (
            <div className="tabla-contenedor">
              <table>
                <thead>
                  <tr><th>ID</th><th>Nombre</th><th>Correo</th><th>Teléfono</th><th>Dirección</th><th>Acción</th></tr>
                </thead>
                <tbody>
                  {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                      <td>{cliente.id}</td><td>{cliente.nombre}</td><td>{cliente.correo}</td>
                      <td>{cliente.telefono}</td><td>{cliente.direccion}</td>
                      <td><button type="button" onClick={() => eliminarCliente(cliente.id)}>Eliminar</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
