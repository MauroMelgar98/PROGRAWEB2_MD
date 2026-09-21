function Producto({ nombre, precio, stock }) 
{
  return (
    <div className="card mb-3">
        <div className="card-body">
      <h5 className="card-tittle"> 
        {nombre} 
    </h5>
    <p>
        Precio: Bs {precio}
    </p>
    <p>
        Stock: {stock}
    </p>
      </div>
    </div>
  );
}
export default Producto;
//Props.- Permite enviar informacion de un componente padre a un componente hijo.