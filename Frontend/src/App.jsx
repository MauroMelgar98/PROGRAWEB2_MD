import { useState } from "react";
import Encabezado from "./components/Encabezado";
import ListarProductos from "./components/ListarProductos";
import FormularioProducto from "./components/FormularioProductos";
import Producto from "./components/Producto";
// import Producto from "./components/Producto";

function App() {
  const[productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Lenovo Legion 5",
      precio: 6500,
      stock: 10,
    },
    {
      id: 2,
      nombre: "Mouse Logitech G502",
      precio: 350,
      stock: 20,
    },
    {
      id: 3,
      nombre: "Monitor Lenovo 22inch",
      precio: 800,
      stock: 20,
    },
  ]);
  const agregarProducto = (producto) => {
    setProductos([...productos, producto]); 
  };
  return (
    // <>
    //   <Encabezado />
    //   <ListarProductos productos={productos} />
    // </>
    <div className="container mt-4">
      <h1 className="text-center mb-4">Sistema de Productos</h1>
      <FormularioProducto agregarProducto={agregarProducto} />
      <h2 className="mt-4">Lista Producto</h2>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
        />
      ))}
    </div>
  );
}
export default App;
