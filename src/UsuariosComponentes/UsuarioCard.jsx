import '../estilosCss/UsuariosEstilos.css';
const CardUsuario = () =>{
    let nombreUsuario = "Juan Pablo";
    let apellidoUsuario = "Sierra Vera";
    let celularUsuario = "314-3454352";

    return(
        <div>
            <img />
            <p>nombre usuario: <span>{nombreUsuario}</span></p>
            <p>apellido usuario: <span>{apellidoUsuario}</span></p>
            <p>celular usuario: <span>{celularUsuario}</span></p>
            <button>Ver mas</button>
        </div>

    );
}
export default CardUsuario;