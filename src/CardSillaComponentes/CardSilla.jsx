import React from 'react';
import '../estilosCss/CardSilla.css';

function CardSilla({ info }) {
  return (
    <div className="card-silla-contenedor">
      <div className="card-silla-imagen">
        <p>This is <br /> a chair.</p>
      </div>
      <div className="card-silla-detalles">
        <p className="silla-nombre">{info.nombre}</p>
        <p className="silla-precio">${info.precio}</p>
      </div>
    </div>
  );
}

export default CardSilla;
