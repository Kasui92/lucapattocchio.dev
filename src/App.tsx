import { ReactElement } from 'react'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

/**
 * App
 * @constructor
 */
const App = (): ReactElement => {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <Hero />
                <About />
                <Projects />
            </main>
            <Footer />
        </>
    )
}

export default App
