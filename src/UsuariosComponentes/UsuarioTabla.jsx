import React from 'react';
import '../estilosCss/ListaEstilos.css'; 

const UsuarioTabla = () => {
  const usuarios = [
    { id: 1, nombre: "Juan Pablo", apellido: "Sierra Vera", celular: "314-3454352" },
    { id: 2, nombre: "María Camila", apellido: "Gomez Perez", celular: "320-1234567" },
    { id: 3, nombre: "Carlos Alberto", apellido: "Rojas Diaz", celular: "311-9876543" }
  ];

  return (
    <div className="tabla-contenedor">
      <h2>Lista de Usuarios</h2>
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.celular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuarioTabla;

