import { ReactElement, useRef } from 'react'
import clsx from 'clsx'
import { useIntersection } from 'react-use'

import { HeaderHero } from './HeaderHero'
import { HeaderNav } from './HeaderNav'

/**
 * Header
 * @returns {JSX.Element}
 */
export const Header = (): ReactElement => {
    const interserctionRef = useRef(null)
    const intersection = useIntersection(interserctionRef, {
        root: null,
        rootMargin: '-100px',
    })

    // we do the reverse `intersection.isIntersecting` to ensure we show the
    // correct state even before React initializes
    // @source: https://github.com/delbaoliveira/website/blob/main/ui/IntersectionSwap.tsx
    let showPrimary = false
    if (intersection && !intersection.isIntersecting) {
        showPrimary = true
    }

    return (
        <header className="mx-auto flex w-full max-w-2xl flex-col gap-8">
            <div
                className={clsx('sticky top-6 z-30 -mx-px transition duration-75 will-change-transform', {
                    '-translate-y-2 scale-95 opacity-0': !showPrimary,
                    'opacity-100': showPrimary,
                })}
            >
                <HeaderNav />
            </div>
            <div ref={interserctionRef}>
                <div
                    className={clsx('transition duration-150 will-change-transform', {
                        '-translate-y-2 scale-[0.98] opacity-0': showPrimary,
                        'opacity-100 delay-100': !showPrimary,
                    })}
                >
                    <HeaderHero />
                </div>
            </div>
        </header>
    )
}
