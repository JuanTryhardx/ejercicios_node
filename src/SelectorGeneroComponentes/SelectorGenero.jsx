import React from 'react';
import '../estilosCss/SelectorGeneroEstilos.css';

function SelectorGenero({ titulo, opciones }) {
  return (
    <div className="gender-contenedor">
      <p className="gender-titulo">{titulo}</p>
      <div className="gender-opciones">
        {opciones.map((opcion, index) => (
          <button 
            key={index} 
            className={`gender-boton ${opcion.claseColor}`}
            title={opcion.genero}
          >
            {opcion.icono}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectorGenero;
