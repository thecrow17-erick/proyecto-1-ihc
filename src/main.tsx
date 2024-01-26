import { Toaster } from "@/components/ui/toaster"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster/>
    <App />
  </React.StrictMode>,
)
