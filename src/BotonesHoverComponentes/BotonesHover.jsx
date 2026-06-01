import '../estilosCss/BotonesHoverEstilos.css';

function BotonesHover({ listaBotones }) {
  return (
    <div className="contenedor-botones-hover">
      {listaBotones.map((boton, index) => (
        <button key={index} className={`btn-hover ${boton.claseColor}`}>
          <span className="btn-titulo">{boton.titulo}</span>
          <span className="btn-subtitulo">{boton.subtitulo}</span>
        </button>
      ))}
    </div>
  );
}

export default BotonesHover;
