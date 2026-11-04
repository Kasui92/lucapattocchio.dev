import type { Navigation } from '@/types/navigation'
import type { Social } from '@/types/socials'
import { type ReactElement } from 'react'
import { Icon } from '@/components/Icon'
import { NavLinks } from './NavLinks'
import { ThemeToggle } from './ThemeToggle'

const GithubLink = ({ url, label, icon }: Pick<Social, 'url' | 'label' | 'icon'>): ReactElement => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group border-border-strong bg-surface/60 text-foreground hover:border-primary hover:text-primary flex items-center gap-x-2 rounded-full border px-2 py-1.5 font-mono text-sm font-semibold shadow-sm transition-colors duration-300 sm:px-3"
        title={`Go to ${label}`}
    >
        <Icon
            name={icon}
            className="h-5 w-5 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
        <span className="hidden sm:inline">{label.toLowerCase()}</span>
    </a>
)

export const Hero = ({
    page,
    github,
    navigation,
    avatar,
}: {
    page: string
    github?: Social
    navigation: Navigation[]
    avatar: string
}): ReactElement => (
    <div className="mt-8 space-y-6">
        <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="ring-border hover:ring-border-strong shrink-0 transform rounded-full shadow-lg ring-[5px] transition-transform duration-300 hover:scale-105">
                <img
                    className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
                    src={avatar}
                    alt="Logo"
                    fetchPriority="high"
                />
            </div>

            <div>
                <h1 className="text-foreground text-2xl leading-none font-semibold sm:text-3xl">Luca Pattocchio</h1>
                <h2 className="text-subtle-foreground mt-2 text-lg leading-none font-medium">
                    <div className="font-mono whitespace-nowrap">
                        <span>@</span>
                        <span className="text-secondary">kasui92</span>
                        <span className="text-primary animate-blink motion-reduce:animate-none" aria-hidden="true">
                            ▌
                        </span>
                    </div>
                </h2>
            </div>
        </div>

        <div className="flex items-start space-x-2">
            <span className="text-subtle-foreground font-mono leading-6 select-none" aria-hidden="true">
                #
            </span>
            <span className="text-md text-muted-foreground leading-6">
                I turn gibberish into web apps, outsmart stubborn terminals, but can’t fix a washing machine despite
                what my grandma thinks.
            </span>
        </div>

        <div className="flex items-center justify-between gap-4">
            {github ? <GithubLink url={github.url} label={github.label} icon={github.icon} /> : <span />}
            {/* Main Navigation */}
            <nav>
                <ul className="flex items-center space-x-4">
                    <NavLinks page={page} navigation={navigation} />
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </div>
    </div>
)
