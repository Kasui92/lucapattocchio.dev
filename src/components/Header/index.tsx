import { ReactElement } from 'react'
import clsx from 'clsx'

import { useInView } from 'react-intersection-observer'

import { Hero } from './Hero'
import { HeaderNav } from './HeaderNav'

/**
 * Header
 * @returns {JSX.Element}
 */
export const Header = (): ReactElement => {
    const { ref, inView } = useInView({
        rootMargin: '-100px',
    })

    // invert inView to show the primary header
    const showPrimary = !inView

    return (
        <>
            <header
                className={clsx('fixed top-6 left-0 z-30 w-full transition duration-75 will-change-transform', {
                    '-translate-y-2 scale-95 opacity-0': !showPrimary,
                    'opacity-100': showPrimary,
                })}
            >
                <HeaderNav />
            </header>
            <div ref={ref}>
                <div
                    className={clsx('transition duration-150 will-change-transform', {
                        '-translate-y-2 scale-[0.98] opacity-0': showPrimary,
                        'opacity-100 delay-100': !showPrimary,
                    })}
                >
                    <Hero />
                </div>
            </div>
        </>
    )
}
