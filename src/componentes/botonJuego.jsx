import React from "react";
//import rock from "./rock.png";
//import paper from './paper.png';
//import scissors from './scissors.png';
//import { type } from "@testing-library/user-event/dist/type";


    function obtenerOpcComlpu(){
    const opciones = ['piedra', 'papel', 'tijera'];
    const opcionCompu = Math.floor(Math.random() * 3);
    return opciones[opcionCompu];     
    }

    function determinarGanador(opcionUsuario, opcionCompu){
if (opcionUsuario === opcionCompu){
    return 'Empate';
}else if(opcionUsuario === 'piedra' && opcionCompu === 'tijera'){
    return 'usuario';
}else if (opcionUsuario === 'papel' && opcionCompu === 'piedra'){
    return 'usuario';
}else if (opcionUsuario === 'tijera' && opcionCompu === 'papel'){
    return 'usuario';
}else {
    return 'computadora';
}
    }


 export default function  BotonJugada ({type, contadores, setContadores}) {
function hacerRonda () {
    let opcionUsuario = type;
    let opcionCompu = obtenerOpcComlpu();
    let ganador = determinarGanador(opcionUsuario, opcionCompu);
    if (ganador==='usuario'){
        setContadores({ usuario: contadores.usuario + 1, computadora: contadores.computadora,})
    }
    if (ganador==='computadora'){
        setContadores({ usuario: contadores.usuario, computadora: contadores.computadora +1,})
    }
}
return (
    <div >
        <button className="botones" onClick={hacerRonda}>{type}</button>
    </div>
);
    }



