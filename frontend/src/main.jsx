import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {StockContext} from "./context/ContextApp.jsx"

createRoot(document.getElementById('root')).render(

  <StrictMode>
   

    <StockContext>
    <App />
    </StockContext>
  
    
  </StrictMode>,
)
