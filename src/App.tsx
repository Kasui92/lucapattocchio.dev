import { ReactElement } from 'react'

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'

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
            </main>
            <Footer />
        </>
    )
}

export default App
