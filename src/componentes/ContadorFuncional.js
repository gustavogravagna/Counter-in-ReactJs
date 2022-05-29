import React,{useState} from 'react'
import './contadorfuncional.css'


const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0)

    const incrementar = (cantidad) => {
        cambiarCuenta(cuenta + cantidad)
    }
    const disminuir = (cantidad) => {
        cambiarCuenta(cuenta - cantidad)
    }
    return(
        <div className='contenedor-informacion'>
            <h2>Contador</h2>
            <div className='contenedor-cuenta'>
                <h2 className='cuenta'>{cuenta}</h2>
            </div>

           
            <div className='botones'>
                <button className='boton1' onClick={()=>incrementar(props.cantidadAumentar)}>+1</button>
                <button className='boton2' onClick={()=>disminuir(props.cantidadDisminuir)}>-1</button>
            </div>
        </div>
       

    )
}


export default ContadorFuncional;