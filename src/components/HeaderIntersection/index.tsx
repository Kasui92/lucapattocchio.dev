import type { Navigation } from '@/types/navigation'
import type { Social } from '@/types/socials'
import type { ReactElement } from 'react'
import { useInView } from 'react-intersection-observer'
import { tw } from '@/libs/merge'
import { HeaderNav } from './HeaderNav'
import { Hero } from './Hero'

export default function Header({
    page,
    github,
    navigation,
    avatar,
}: {
    page: string
    github?: Social
    navigation: Navigation[]
    avatar: string
}): ReactElement {
    const { ref, inView } = useInView({
        rootMargin: '-100px',
        threshold: 0,
        initialInView: true,
    })

    const showPrimary = !inView

    return (
        <>
            <header
                inert={!showPrimary}
                className={tw('fixed top-6 left-0 z-30 w-full transition duration-75 will-change-transform', {
                    'pointer-events-none -translate-y-2 scale-95 opacity-0': !showPrimary,
                    'opacity-100': showPrimary,
                })}
            >
                <HeaderNav page={page} navigation={navigation} avatar={avatar} />
            </header>
            <div ref={ref}>
                <div
                    className={tw('transition duration-150 will-change-transform', {
                        '-translate-y-2 scale-[0.98] opacity-0': showPrimary,
                        'opacity-100 delay-100': !showPrimary,
                    })}
                >
                    <Hero page={page} github={github} navigation={navigation} avatar={avatar} />
                </div>
            </div>
        </>
    )
}
