import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './assets/styles/global/tailwind.css'
import './assets/styles/global/normalize.css'
import './assets/styles/global/global.css'

import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
