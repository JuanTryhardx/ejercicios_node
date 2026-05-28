import React from 'react';
import '../estilosCss/NewsletterEstilos.css';

function NewsletterForm({ infoNewsletter }) {
  return (
    <div className="newsletter-contenedor">
      <div className="newsletter-borde-interno">
        <h2 className="newsletter-titulo">{infoNewsletter.titulo}</h2>
        <p className="newsletter-subtitulo">{infoNewsletter.descripcion}</p>
        <input 
          type="text" 
          className="newsletter-input" 
          placeholder={infoNewsletter.placeholderInput} 
        />
        <button className="newsletter-boton">
          {infoNewsletter.textoBoton}
        </button>
      </div>
    </div>
  );
}

export default NewsletterForm;
