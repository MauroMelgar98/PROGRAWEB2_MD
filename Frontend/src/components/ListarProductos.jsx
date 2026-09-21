import Producto from "./Producto";
function ListarProductos({ productos }) {
    return (
        <div>
            <h2>   Lista de Productos </h2>
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
export default ListarProductos;