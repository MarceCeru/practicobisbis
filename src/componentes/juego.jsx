import React from "react";
import { useState, useEffect } from "react";
import BotonJugada from "./botonJuego"


export default function Juego ({contadores, setContadores}) {
    const [ganador, setGanador] = useState('');
    function determinarGanador(){
        if(contadores.usuario ===3){
            setGanador('usuario');
        }else if(contadores.computadora ===3){
            setGanador('computadora');
        }
    }

    useEffect(() => {determinarGanador() }, [contadores]);

    return(
        <div >
            <BotonJugada type='piedra' setContadores={setContadores} contadores={contadores}/>
            <BotonJugada type='papel' setContadores={setContadores} contadores={contadores}/>
            <BotonJugada type='tijera' setContadores={setContadores} contadores={contadores}/>
        </div>

    )
}