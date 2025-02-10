import { ReactElement, useState } from 'react'
import { NavProfilePic } from '../ProfilePic'
import { NavInline, Nav } from '../Nav'

import { IconMenu2 } from '@tabler/icons-react'

/**
 * HeaderNav
 */
export const HeaderNav = (): ReactElement => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return (
        <div className="mx-auto w-full max-w-2xl px-4 xl:px-0">
            <div className="shadow-surface-glass -mx-px rounded-2xl bg-black-600/20 px-4 py-2 shadow-lg backdrop-blur-[12px]">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                        <NavProfilePic />
                        <div className="flex items-center font-semibold text-silver-900/90">Luca Pattocchio</div>
                    </div>

                    <div className="hidden md:flex">
                        <NavInline />
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            className="rounded-full p-1"
                            type="button"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <IconMenu2 className="h-6 w-6 text-silver-900/90" />
                        </button>
                    </div>
                </div>
                <div
                    className={`transition-max-height overflow-hidden duration-300 ease-in-out md:hidden ${
                        isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <div className="mt-2 py-2">
                        <Nav />
                    </div>
                </div>
            </div>
        </div>
    )
}
