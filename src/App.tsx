import { ReactElement } from 'react'

import Header from './components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import MouseScroll from './components/MouseScroll'

/**
 * App
 * @constructor
 */
const App = (): ReactElement => {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col">
                <Hero />
                <About />
                <Projects />
            </main>
            <Footer />
            <MouseScroll />
        </>
    )
}

export default App
