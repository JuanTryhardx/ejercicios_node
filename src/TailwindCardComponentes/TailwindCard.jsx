import React from 'react';
import '../estilosCss/TailwindCardEstilos.css';

function TailwindCard({ infoCard }) {
  return (
    <div className="tw-card-contenedor">
      <div className="tw-card-imagen-azul"></div>
      <div className="tw-card-contenido">
        <h3 className="tw-card-titulo">{infoCard.titulo}</h3>
        <p className="tw-card-descripcion">{infoCard.descripcion}</p>
        <button className="tw-card-boton">
          {infoCard.textoBoton}
        </button>
      </div>
    </div>
  );
}

export default TailwindCard;
