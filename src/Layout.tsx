import { ReactElement } from 'react'
import { Outlet } from 'react-router'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

/**
 * Layout
 * @constructor
 */
const Layout = (): ReactElement => {
    return (
        <>
            <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col px-4 pt-12 xl:px-0">
                <Header />
                <main className="mt-24 flex-auto space-y-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
