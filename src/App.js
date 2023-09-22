
import './App.css';
import React, {useState} from 'react';
import  IngresoNombre  from './componentes/IngresoNombres';
import MostrarSaludos from './componentes/MostrarSaludos';
import BotonInicioReinicio from './componentes/botonInicioReinicio';
import ResultadosParciales from './componentes/resultadosParciales';
import ResutadoFinal from './componentes/resultadoFinal';
import Juego from './componentes/juego';




export default function App() {

const [nombre, setNombre] = useState('');

const HandleNombreChange = (event) => {
  setNombre(event.target.value);
};




const [validarName, setValidarName] = useState('');
const [contadores, setContadores] = useState({ usuario: 0, computadora: 0});
const [ganador, setGanador] = useState('');
const [desabilitar, setDesabilitar] = useState(false);



    return (

    <div className='App'>

      <div className='titulo'>
      <h1>PIEDRA PAPEL TIJERA</h1>
      </div>

       <div id='comienzo'>
      < IngresoNombre nombre={nombre} onNombreChange={HandleNombreChange}/>
      <br/>
       <BotonInicioReinicio validarName={validarName} setValidarName={setValidarName} ganador={ganador} setGanador={setGanador}  nombre={nombre} desabilitar={desabilitar} setDesabilitar={setDesabilitar} contadores={contadores} setContadores={setContadores}/>
         </div>

       <div className='saludo'>  
         <MostrarSaludos validarName={validarName} nombre={nombre} contadores={contadores}/>
      </div>

      <div >
        <Juego contadores={contadores} setContadores={setContadores} ganador={ganador} setGanador={setGanador} desabilitar={desabilitar} setDesabilitar={setDesabilitar}/>
      </div>
     

      <div className='resultadosParciales'>
         <ResultadosParciales contadores={contadores}  />
      
      </div>

      <div id='resultadoFinal'>
         <ResutadoFinal ganador={ganador} setGanador={setGanador}/>
      </div>

     
    </div>
    
    )
}