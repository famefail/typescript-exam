import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './page/Container.tsx'
import './App.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
