
import './App.css';
import React, {useState} from 'react';
import  IngresoNombre  from './componentes/IngresoNombres';
import MostrarSaludos from './componentes/MostrarSaludos';
import BotonInicioReinicio from './componentes/botonInicioReinicio';
import ResultadosParciales from './componentes/resultadosParciales';
import ResutadoFinal from './componentes/resultadoFinal';
//import BotonJugada from './componentes/botonJuego';
import Juego from './componentes/juego';




export default function App() {

const [nombre, setNombre] = useState('');

const HandleNombreChange = (event) => {
  setNombre(event.target.value);
};


//const [saludo, setSaludo] = useState('');

const [validarName, setValidarName] = useState('');
const [contadores, setContadores] = useState({ usuario: 0, computadora: 0});



    return (

    <div className='App'>

      <div className='titulo'>
      <h1>PIEDRA PAPEL TIJERA</h1>
      </div>

      <div>
      < IngresoNombre nombre={nombre} onNombreChange={HandleNombreChange}/>
      </div>

      <div >
        <BotonInicioReinicio validarName={validarName} setValidarName={setValidarName}  nombre={nombre}/>
      </div>

      <div className='saludo'>
        <MostrarSaludos validarName={validarName} nombre={nombre}/>
      </div>

      <div >
        <Juego contadores={contadores} setContadores={setContadores}/>
      </div>
     

      <div className='resultadosParciales'>
         <ResultadosParciales contadores={contadores}  />
      
      </div>

      <div className='resultadoFinal'>
         <ResutadoFinal/>
      </div>

     
    </div>
    
    )
}