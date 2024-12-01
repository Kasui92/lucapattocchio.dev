import { ReactElement } from 'react'
import { NavProfilePic } from '../ProfilePic'
import { Nav } from '../Nav'

/**
 * HeaderNav
 */
export const HeaderNav = (): ReactElement => (
    <div className="shadow-surface-glass rounded-2xl bg-black-600/20 px-4 py-2 shadow-lg backdrop-blur-[12px]">
        <div className="flex items-center justify-between">
            <div className="flex space-x-4">
                <NavProfilePic />
                <div className="flex items-center font-semibold text-silver-900/90">Luca Pattocchio</div>
            </div>

            <Nav />
        </div>
    </div>
)
