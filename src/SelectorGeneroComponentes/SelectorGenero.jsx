import { useState } from 'react';
import '../estilosCss/SelectorGeneroEstilos.css';

function SelectorGenero({ titulo, opciones }) {
  const [generoSeleccionado, setGeneroSeleccionado] = useState(null);

  return (
    <div className="gender-selector-card">
      <h3>{titulo}</h3>
      <div className="opciones-container">
        {opciones.map((opcion, index) => (
          <button 
            key={index} 
            className={`gender-btn ${opcion.claseColor} ${generoSeleccionado === opcion.genero ? 'activo' : ''}`}
            onClick={() => setGeneroSeleccionado(opcion.genero)}
          >
            <span className="icono-genero">{opcion.icono}</span>
          </button>
        ))}
      </div>
      {generoSeleccionado && (
        <p className="seleccion-texto">Has seleccionado: <strong>{generoSeleccionado}</strong></p>
      )}
    </div>
  );
}

export default SelectorGenero;
