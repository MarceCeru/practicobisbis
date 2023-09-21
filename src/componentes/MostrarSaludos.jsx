import React from "react";

const MostrarSaludos = ({nombre, validarName, contadores}) => {
  function hola (){
    if (contadores.usuario===0 && contadores.computadora===0 ) {
      
      return(
        <>
          Hola, {nombre}. Esta es una partida al mejor de 5. Elije un opcion.
        </>
      )
   
    }else if(contadores.usuario===3 || contadores.computadora===3){
      return(
        <>
          
        </>
      )
    }else{
    return(
      <>
        Elije nuevamente.
      </>
    )
    }
  }

  if(validarName===true){

    return(
     hola()
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
