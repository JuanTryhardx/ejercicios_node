import logo from './logo.svg';
import './App.css';
import CardUsuario from './UsuariosComponentes/UsuarioCard';
import UsuarioTabla from './UsuariosComponentes/UsuarioTabla';
import TablaProductos from './ProductosComponentes/TablaProducto';

function App() {
  // info tomadas de la API
  const listaProductos = [
    { codigo: "Codigo 001", nombre: "Mantequilla", cantidad: "200", unidad: "gr" }
  ];
  const colores = ["azul", "verde", "rojo", "negroo"];

  return (
    <>
      <div className="seccion-superior">
        <CardUsuario />
        <UsuarioTabla />
      </div>
      
      <h1 className='texto'>Listas de Productos</h1>
      <TablaProductos info={listaProductos} color={colores} />
    </>
  );
}

export default App;
