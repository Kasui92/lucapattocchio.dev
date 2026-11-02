import type { Navigation } from '@/types/navigation'
import { type ReactElement, useState } from 'react'
import { Icon } from '@/components/Icon'
import { NavLinks } from './NavLinks'
import { ThemeToggle } from './ThemeToggle'

export const HeaderNav = ({
    page,
    navigation,
    avatar,
}: {
    page: string
    navigation: Navigation[]
    avatar: string
}): ReactElement => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return (
        <div className="mx-auto w-full max-w-2xl px-4 xl:px-0">
            <div className="shadow-surface-glass bg-surface/60 -mx-px rounded-2xl px-4 py-2 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex space-x-4">
                        <div className="group transform rounded-full transition-transform duration-300 hover:scale-110">
                            <a
                                href="/"
                                className="transform rounded-full transition-transform duration-300 hover:scale-110"
                                title="Go to homepage"
                            >
                                <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={avatar}
                                    alt="Logo"
                                    fetchPriority="high"
                                />
                            </a>
                        </div>
                        <div className="flex items-center font-mono font-semibold">
                            <span className="text-primary">kasui92</span>
                            <span className="text-muted-foreground">@dev</span>
                        </div>
                    </div>

                    <div className="hidden md:flex">
                        {/* Main Navigation - Inline */}
                        <nav>
                            <ul className="flex items-center space-x-4">
                                <NavLinks page={page} navigation={navigation} prefetch />
                                <li>
                                    <ThemeToggle />
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-x-3 md:hidden">
                        <ThemeToggle />
                        <button
                            className="cursor-pointer rounded-full p-1"
                            type="button"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <Icon name="menu-2" className="text-foreground h-6 w-6" />
                        </button>
                    </div>
                </div>
                {/* Main Navigation - Mobile */}
                <div
                    className={`transition-max-height overflow-hidden duration-300 ease-in-out md:hidden ${
                        isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <div className="mt-2 py-2">
                        <nav>
                            <ul className="flex flex-col space-y-2">
                                <NavLinks page={page} navigation={navigation} prefetch />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
