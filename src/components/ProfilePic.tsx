import { ReactElement } from 'react'

import profilePic from '../assets/images/profile_pic.jpg'

export const HeroProfilePic = (): ReactElement => (
    <div className="transform rounded-full shadow-lg ring-[5px] ring-silver-500/10 transition-transform duration-300 hover:scale-105 hover:ring-silver-500/20">
        <img className="h-16 w-16 rounded-full object-cover" src={profilePic} alt="Logo" />
    </div>
)

export const NavProfilePic = (): ReactElement => (
    <div className="group transform rounded-full transition-transform duration-300 hover:scale-110">
        <a
            href="/"
            className="transform rounded-full transition-transform duration-300 hover:scale-110"
            title="Go to homepage"
        >
            <img className="h-10 w-10 rounded-full object-cover" src={profilePic} alt="Logo" />
        </a>
    </div>
)
