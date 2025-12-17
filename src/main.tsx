import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { MDXProvider } from '@mdx-js/react'

import { App } from './App.tsx'

import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <MDXProvider>
                <App />
            </MDXProvider>
        </BrowserRouter>
    </StrictMode>,
)
