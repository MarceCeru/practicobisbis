import React from "react";

const MostrarSaludos = ({nombre, validarName}) => {

  if(validarName===true){

    return(
      <>
      Hola, {nombre}. Esta sera un partida al mejor de 5. Elige una opcion!.
      </>
    )
  }

}

export default MostrarSaludos;


/*  function generarSaludos(nombre){
  return(
     'Hola, '+nombre
  )
    ;
}*/

/*function MostrarSaludos(props){
  const saludar= generarSaludos(props.nombre);
  
  return <p>{saludar}</p>
 
}

export default MostrarSaludos;*/
