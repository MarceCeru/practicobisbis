import React from "react";
//import ResutadoFinal from "./resultadoFinal";

export default function Reinicio({contadores, setContadores, ganador, setGanador, desabilitar, setDesabilitar}){
 function reiniciar( ){
    setDesabilitar(true);
    setContadores({ contadores,usuario: (0), computadora: (0)});
    setGanador('');
 }
    return(
        <div>
            <button onClick={reiniciar} id="reinicio">Reinicio</button>

        </div>

    )
}