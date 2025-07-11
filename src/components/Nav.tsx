import { ReactElement } from 'react'
import { NavLink } from 'react-router'

import { routes, RoutesEntry } from '../data/routes'
import { SocialEntry, socials } from '../data/socials'
import { DownloadResumeInline } from './Buttons'
import { IconMail } from '@tabler/icons-react'

export const NavInline = (): ReactElement => (
    <nav>
        <ul className="flex items-center space-x-4">
            {Object.entries(routes).map(([key, { label, url }]) => (
                <li key={key}>
                    <NavLink
                        to={url}
                        className={({ isActive }) =>
                            `${isActive ? 'text-green-700/90 underline decoration-2 underline-offset-[6px]' : 'text-silver-700/90'} transition-colors duration-300 hover:text-green-700/90`
                        }
                        title={`Go to ${label} page`}
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
            <li>
                <DownloadResumeInline />
            </li>
        </ul>
    </nav>
)

export const Nav = (): ReactElement => (
    <nav>
        <ul className="flex flex-col space-y-2">
            {Object.entries(routes as Record<string, RoutesEntry>).map(([key, { label, url }]) => (
                <li key={key}>
                    <NavLink
                        to={url}
                        className={({ isActive }) =>
                            `${isActive ? 'text-green-700/90 underline decoration-2 underline-offset-[6px]' : 'text-silver-700/90'} transition-colors duration-300 hover:text-green-700/90`
                        }
                        title={`Go to ${label} page`}
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
            <li>
                <DownloadResumeInline />
            </li>
        </ul>
    </nav>
)

export const SocialNav = (): ReactElement => (
    <nav>
        <ul className="flex space-x-4">
            {Object.entries(socials as Record<string, SocialEntry>).map(([key, { label, url, icon }]) => {
                const SocialIcon = icon

                return (
                    <li key={key}>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-silver-700/90 transition-colors duration-300 hover:text-green-700/90"
                            title={`Go to ${label}`}
                        >
                            <SocialIcon className="text-silver-700/90 h-6 w-6 transform transition-transform hover:scale-110 hover:rotate-12" />
                        </a>
                    </li>
                )
            })}
            <li>
                <a
                    href={`mailto:me@lucapattocchio.dev`}
                    className="text-silver-700/90 transition-colors duration-300 hover:text-green-700/90"
                    title={`Send me an email! 📧`}
                >
                    <IconMail className="text-silver-700/90 h-6 w-6 transform transition-transform hover:scale-110 hover:rotate-12" />
                </a>
            </li>
        </ul>
    </nav>
)
