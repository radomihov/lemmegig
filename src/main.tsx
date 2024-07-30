import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";


const baseUrl=import.meta.env.VITE_API_BASE_URL;
console.log(baseUrl);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <React.StrictMode>
          <App />
      </React.StrictMode>,
  </BrowserRouter>
)
