import React from "react";
import {  useEffect } from "react";
import BotonJugada from "./botonJuego"


export default function Juego ({contadores, setContadores, ganador, setGanador, desabilitar, setDesabilitar}) {
    function determinarGanador(){
        if(contadores.usuario ===3){
            setGanador('Gana el usuario');
            setDesabilitar(false);
        }else if(contadores.computadora ===3){
            setGanador('Gana la computadora');
            setDesabilitar(false);
        }
    }

    useEffect(() => {determinarGanador() }, [contadores]);

    return(
        <div >
            <BotonJugada setContadores={setContadores} contadores={contadores} desabilitar={desabilitar}/>
         
        </div>

    )
}