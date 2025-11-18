import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import HeaderAudioMount from './components/HeaderAudioMount'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderAudioMount>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </HeaderAudioMount>
  </React.StrictMode>,
)
