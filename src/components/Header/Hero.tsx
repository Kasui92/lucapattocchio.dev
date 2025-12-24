import { ReactElement } from 'react'
import { HeroProfilePic } from '@/components/ProfilePic'
import { NavInline, SocialNav } from '@/components/Nav'

/**
 * Hero
 */
export const Hero = (): ReactElement => (
    <div className="mt-8 space-y-6">
        <div className="flex items-center space-x-6">
            <HeroProfilePic />

            <div className="mt-2">
                <h1 className="text-silver-900/90 text-3xl leading-none font-semibold">Luca Pattocchio</h1>
                <h2 className="text-silver-700/50 mt-2 items-center space-y-2 text-lg leading-none font-medium lg:mt-0 lg:flex lg:space-y-0 lg:space-x-2">
                    <div className="whitespace-nowrap">
                        <span>Full Stack Developer</span>
                    </div>
                </h2>
            </div>
        </div>

        <div className="flex items-center space-x-2">
            <span className="text-md text-silver-700/90">
                I turn gibberish into web apps, outsmart stubborn terminals, but can’t fix a washing machine despite what my
                grandma thinks.
            </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
            <SocialNav />
            <NavInline />
        </div>
    </div>
)
