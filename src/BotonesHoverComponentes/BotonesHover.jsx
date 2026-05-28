import React from 'react';
import '../estilosCss/BotonesHoverEstilos.css';

function BotonesHover({ listaBotones }) {
  return (
    <div className="botones-hover-contenedor">
      {listaBotones.map((boton, index) => (
        <button key={index} className={`boton-hover-item ${boton.claseColor}`}>
          <span className="boton-hover-titulo">{boton.titulo}</span>
          <span className="boton-hover-subtitulo">{boton.subtitulo}</span>
        </button>
      ))}
    </div>
  );
}

export default BotonesHover;
