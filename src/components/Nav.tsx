import { ReactElement } from 'react'
import { NavLink } from 'react-router'

import { routes } from '../data/routes'

export const Nav = (): ReactElement => (
    <nav>
        <ul className="flex space-x-4">
            {Object.entries(routes).map(([key, { label, url }]) => (
                <li key={key}>
                    <NavLink
                        to={url}
                        className={({ isActive }) =>
                            `${isActive ? 'text-green-700/90 underline decoration-2 underline-offset-[6px]' : 'text-silver-700/90'} transition-colors duration-300 hover:text-green-700/90`
                        }
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
)
