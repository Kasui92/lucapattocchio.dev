import type { Navigation } from '@/types/navigation'
import type { ReactElement } from 'react'
import { tw } from '@/libs/merge'

export const NavLinks = ({
    page,
    navigation,
    prefetch = false,
}: {
    page: string
    navigation: Navigation[]
    prefetch?: boolean
}): ReactElement => (
    <>
        {navigation.map(({ id, label, url }) => {
            const isActive = page === label.toLowerCase()

            return (
                <li key={id}>
                    <a
                        href={url}
                        className={tw(
                            isActive ? 'text-primary font-bold' : 'text-muted-foreground',
                            'font-mono text-sm transition-colors duration-300 hover:text-primary',
                        )}
                        title={`Go to ${label} page`}
                        aria-current={isActive ? 'page' : undefined}
                        data-astro-prefetch={prefetch || undefined}
                    >
                        ~/{label.toLowerCase()}
                    </a>
                </li>
            )
        })}
    </>
)
