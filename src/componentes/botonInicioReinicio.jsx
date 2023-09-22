import React from "react";


export const BotonInicioReinicio = ({nombre, validarName, setValidarName, contadores, setContadores, desabilitar, setDesabilitar, setGanador}) =>{

function Saludar ( ){
//setContadores({usuario: contadores.usuario(0), computadora: contadores.computadora(0)});
  if(nombre===""){
    alert('Debe ingresar su nombre');
  }else{
    setContadores ({ usuario: 0, computadora: 0});;
    setValidarName(true);
    setDesabilitar (true);
    setGanador ('');
    
  }
    }

return(
    <div >
       <button onClick={Saludar}  id="Inicio">Iniciar/Reiniciar</button>
    </div>
);
}


export default BotonInicioReinicio;