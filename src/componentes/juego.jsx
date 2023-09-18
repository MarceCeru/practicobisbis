import React from "react";
import { useState, useEffect } from "react";
import BotonJugada from "./botonJuego"


export default function Juego ({contadores, setContadores, ganador, setGanador}) {
    function determinarGanador(){
        if(contadores.usuario ===3){
            setGanador('Gana el usuario');
        }else if(contadores.computadora ===3){
            setGanador('Gana la computadora');
        }
    }

    useEffect(() => {determinarGanador() }, [contadores]);

    return(
        <div >
            <BotonJugada setContadores={setContadores} contadores={contadores}/>
         
        </div>

    )
}