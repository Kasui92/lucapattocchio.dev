import { ReactElement } from 'react'

import profilePic from '../../assets/images/profile_pic.jpg'

/**
 * HeaderNav
 */
export const HeaderNav = (): ReactElement => {
    return (
        <div className="shadow-surface-glass rounded-2xl bg-black-600/20 px-4 py-2 shadow-lg backdrop-blur-[12px]">
            <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                    <div className="group transform rounded-full transition-transform duration-300 hover:scale-110">
                        <a
                            href="/"
                            className="transform rounded-full transition-transform duration-300 hover:scale-110"
                            title="Go to homepage"
                        >
                            <img className="h-10 w-10 rounded-full object-cover" src={profilePic} alt="Logo" />
                        </a>
                    </div>
                    <div className="flex items-center">Luca Pattocchio</div>
                </div>
            </div>
        </div>
    )
}
