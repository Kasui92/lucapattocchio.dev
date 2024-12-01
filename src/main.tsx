import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import Layout from './Layout.tsx'

// Routes
import { About } from './routes/About'

import './assets/styles/globals.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
