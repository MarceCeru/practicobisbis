import React from "react";

export default function Reinicio({contadores, setcontadores}){
 function reiniciar(){
    setcontadores({ usuario: 0, computadora: 0});
 }
    return(
        <div>
            <button onClick={reiniciar} id="reinicio">Reinicio</button>
        </div>

    )
}