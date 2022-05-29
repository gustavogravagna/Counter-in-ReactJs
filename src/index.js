import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import ContadorFuncional from './componentes/ContadorFuncional'


const App = () => {
  return(
    <div className="contenedor">
      <ContadorFuncional cantidadAumentar = {1} cantidadDisminuir = {1}/>
    </div>
  )
}










const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
