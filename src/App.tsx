import { ReactElement, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

// Routes
import { About } from './routes/About'
import { Projects } from './routes/Projects'
import { Blog } from './routes/Blog'
import { Articles } from './routes/Articles'
import { NotFound } from './routes/NotFound'

/**
 * Layout
 * @constructor
 */
export const App = (): ReactElement => {
    const location = useLocation()

    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitionStage, setTransitionStage] = useState('animate-slide-in-section')

    useEffect(() => {
        if (location?.pathname !== displayLocation?.pathname) setTransitionStage('animate-slide-out-section')
    }, [location, displayLocation])

    return (
        <>
            <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col px-4 pt-12 xl:px-0">
                <Header />
                <main
                    className={`mt-24 flex-auto space-y-10 ${transitionStage}`}
                    onAnimationEnd={() => {
                        if (transitionStage === 'animate-slide-out-section') {
                            setTransitionStage('animate-slide-in-section')
                            setDisplayLocation(location)
                        }
                    }}
                >
                    <Routes location={displayLocation}>
                        <Route index element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="blog">
                            <Route index element={<Blog />} />
                            <Route path=":articleId" element={<Articles />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    )
}
