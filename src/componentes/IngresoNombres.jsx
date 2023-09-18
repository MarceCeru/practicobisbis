
import React from "react";




const IngresoNombre = ({nombre, onNombreChange}) => {
  return(
    <div >
      <input id="IngresoNombre" type="text" value={nombre} placeholder="ingrese su nombre" onChange={onNombreChange}/>
    </div>
  )
}

  export default IngresoNombre;



