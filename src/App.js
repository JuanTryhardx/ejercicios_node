import logo from './logo.svg';
import './App.css';
import CardUsuario from './UsuariosComponentes/UsuarioCard';
import UsuarioTabla from './UsuariosComponentes/UsuarioTabla';
import TablaProductos from './ProductosComponentes/TablaProducto';
import CardSilla from './CardSillaComponentes/CardSilla';
import NewsletterForm from './NewsletterComponentes/NewsletterForm';
import BotonesHover from './BotonesHoverComponentes/BotonesHover';
import TailwindCard from './TailwindCardComponentes/TailwindCard';
import SelectorGenero from './SelectorGeneroComponentes/SelectorGenero';

function App() {
  const listaProductos = [
    { codigo: "Codigo 001", nombre: "Mantequilla", cantidad: "200", unidad: "gr" }
  ];
  
  const colores = ["azul", "verde", "rojo", "negroo"];

  const datosSilla = {
    nombre: "Precio chair",
    precio: "100"
  };

  const datosNewsletter = {
    titulo: "NEWSLETTER",
    descripcion: "Recibe cada semana una dosis de crisis existencial directamente en tu bandeja de entrada.",
    placeholderInput: "Tu vida",
    textoBoton: "CLICK ME"
  };

  const datosBotones = [
    { titulo: "Hover Me", subtitulo: "Lorem Ipsum", claseColor: "btn-rojo" },
    { titulo: "Hover Me", subtitulo: "Lorem Ipsum", claseColor: "btn-azul" },
    { titulo: "Hover Me", subtitulo: "Lorem Ipsum", claseColor: "btn-verde" }
  ];

  const datosTwCard = {
    titulo: "Tailwind card",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    textoBoton: "READ MORE"
  };

  const tituloGender = "SELECCIONA TU GENERO";
  const opcionesGender = [
    { icono: "♂", genero: "Masculino", claseColor: "g-azul" },
    { icono: "♀", genero: "Femenino", claseColor: "g-rosa" },
    { icono: "⚧", genero: "Otros", claseColor: "g-morado" },
    { icono: "?", genero: "No especificado", claseColor: "g-gris" }
  ];

  return (
    <>
      <div className="seccion-superior">
        <CardUsuario />
        <UsuarioTabla />
        <CardSilla info={datosSilla} />
        <NewsletterForm infoNewsletter={datosNewsletter} />
        <BotonesHover listaBotones={datosBotones} />
        <TailwindCard infoCard={datosTwCard} />
        <SelectorGenero titulo={tituloGender} opciones={opcionesGender} />
      </div>

      <h1 className='texto'>Listas de Productos</h1>
      <TablaProductos info={listaProductos} color={colores} />
    </>
  );
}

export default App;
