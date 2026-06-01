// 1. Crear el componente
// 2. Crear funcion que manejara el estado (UseState)
// 3. Aplicar los elementos js del componente en el html

import { useState } from "react";
//1. crear el componente
export const MensajeTexto = ()=>{
    //2. crear el estado del componente
    const [mensaje , setEstado] = useState("estado inicial");
    //3. crear la funcion que modifica el estado
    const escribirLetra=(evento)=>{
       let letras = evento.target.value;
       setEstado(letras);
    }//4. Usar los elementos js

    return(
        <div>
            <input type="text" onInput={escribirLetra} />
            <label> {mensaje} </label>
        </div>

    );

};