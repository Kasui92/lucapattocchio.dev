import { ReactElement } from 'react'

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

/**
 * App
 * @constructor
 */
const App = (): ReactElement => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center">
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default App
