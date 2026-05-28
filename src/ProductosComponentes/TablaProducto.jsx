import React from 'react';
// Importamos tu nuevo archivo de estilos independiente
import '../estilosCss/ProductosEstilos.css'; 

const TablaProducto = ({ info }) => {
  return (
    <div className="contenedor-productos">
      <table className="tabla-productos">
        <thead>
          <tr>
            <th>Codigo Productos</th>
            <th>Nombre de Productos</th>
            <th>Cantidad Comprada</th>
            <th>Unidad de medida</th>
          </tr>
        </thead>
        <tbody>
          {info.map((producto, index) => (
            <tr key={index}>
              <td>{producto.codigo}</td>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.unidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProducto;
