import { useState } from 'react';
import '../estilosCss/NewsletterEstilos.css';

function NewsletterForm({ infoNewsletter }) {
  const [correo, setCorreo] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (correo.trim() === "") return alert("¡Por favor escribe algo primero!");
    alert(`¡Registrado con éxito!: ${correo}`);
    setCorreo("");
  };

  return (
    <form className="newsletter-card" onSubmit={manejarEnvio}>
      <h2>{infoNewsletter.titulo}</h2>
      <p>{infoNewsletter.descripcion}</p>
      
      <input 
        type="text" 
        placeholder={infoNewsletter.placeholderInput}
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      
      <button type="submit">{infoNewsletter.textoBoton}</button>
    </form>
  );
}

export default NewsletterForm;
