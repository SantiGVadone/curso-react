import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import './app.css'


const root = ReactDOM.createRoot(document.getElementById('root'))


//siempre que se crea un componente debe ir en uppercase, para que react lo reconozca como un componente y no como una etiqueta html
//si3empre que se crea un componente debe retornar un elemento jsx, es decir, un elemento html o otro componente

root.render(
  <App/>
)
      