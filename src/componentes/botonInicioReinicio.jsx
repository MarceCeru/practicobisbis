import React from "react";


export const BotonInicioReinicio = ({nombre, validarName, setValidarName, contadores, setContadores}) =>{

function Saludar (){
//setContadores({usuario: contadores.usuario(0), computadora: contadores.computadora(0)});
  if(nombre===""){
    alert('Debe ingresar su nombre');
  }else{
    setValidarName(true);
  }
    }

return(
    <div >
       <button onClick={Saludar}  id="Inicio">Iniciar</button>
    </div>
);
}


export default BotonInicioReinicio;