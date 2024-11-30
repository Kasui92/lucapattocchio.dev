import { ReactElement } from 'react'

/**
 * HeaderNav
 */
export const HeaderNav = (): ReactElement => {
    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
                <a href="/" className="flex-shrink-0">
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Logo" />
                </a>
            </div>
        </nav>
    )
}
