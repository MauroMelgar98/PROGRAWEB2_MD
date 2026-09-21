import Encabezado from "./components/Encabezado";
import ListarProductos from "./components/ListarProductos";
// import Producto from "./components/Producto";

function App() {
  const productos = [
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
  ];
  return (
    <>
      <Encabezado />
      <ListarProductos productos={productos} />
    </>
  );
}
export default App;
