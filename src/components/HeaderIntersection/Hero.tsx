import type { Navigation } from '@/types/navigation'
import type { Social } from '@/types/socials'
import { type ReactElement } from 'react'
import { Icon } from '@/components/Icon'
import { NavLinks } from './NavLinks'
import { ThemeToggle } from './ThemeToggle'

const SocialLink = ({ url, label, icon }: Pick<Social, 'url' | 'label' | 'icon'>): ReactElement => (
    <li>
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            title={`Go to ${label}`}
        >
            <Icon
                name={icon}
                className="text-muted-foreground h-5 w-5 transform transition-transform hover:scale-110 hover:rotate-12"
            />
        </a>
    </li>
)

export const Hero = ({
    page,
    socials,
    navigation,
    avatar,
}: {
    page: string
    socials: Social[]
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

        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
            {/* Social Icons Navigation */}
            <nav>
                <ul className="flex items-center gap-3">
                    {socials
                        .filter(({ group }) => group === 'code')
                        .map(({ id, label, url, icon }) => (
                            <SocialLink key={id} url={url} label={label} icon={icon} />
                        ))}
                    <li className="text-border-strong font-mono select-none" aria-hidden="true">
                        │
                    </li>
                    {socials
                        .filter(({ group }) => group === 'social')
                        .map(({ id, label, url, icon }) => (
                            <SocialLink key={id} url={url} label={label} icon={icon} />
                        ))}
                    <li>
                        <a
                            href={`mailto:info@lucapattocchio.dev`}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            title={`Send me an email! 📧`}
                        >
                            <Icon
                                name="mail"
                                className="text-muted-foreground h-5 w-5 transform transition-transform hover:scale-110 hover:rotate-12"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
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
