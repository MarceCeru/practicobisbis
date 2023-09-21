import React from "react";


export default function ResultadosParciales ({ contadores }) {
    
        return(
           <>
            <p>Usuario: {contadores.usuario} ,         Computadora: {contadores.computadora}</p>
            </>
        );
    

}

//export default ResultadosParciales;

/*function resultadosParciales(usePoints, machinePoints){

    <p id='userPoints'>'Usuario= '+usePoints</p>;
    <p id='machinePoints'>'Computadora= '+machinePoints</p>;

}

export default resultadosParciales;*/