import { ReactElement } from 'react'
import social from '@/config/social'

/**
 * Hero
 * @constructor
 */
const Hero = (): ReactElement => {
    return (
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <div className={`flex flex-row items-center space-x-4`}>
                <img className="h-36 w-36 rounded-full object-cover" src="/assets/avatar.gif" alt="Luca Pattocchio" />
                <div>
                    <h1 className={`text-left text-3xl font-bold md:text-4xl`}>
                        Ciao! 👋 <br />
                        I&apos;m&nbsp;
                        <span className="bg-gradient-to-r from-emerald-600 to-cyan-700 bg-clip-text font-extrabold text-transparent">
                            Luca Pattocchio
                        </span>
                    </h1>
                    <div className="mt-1 flex justify-center space-x-6">
                        {Object.entries(social).map(([key, entry]) => (
                            <a key={entry.label} href={entry.url}>
                                <span className="sr-only">{entry.label}</span>
                                <img
                                    className={`h-6 w-6 hover:opacity-70`}
                                    src={`/assets/icons/${key}.svg`}
                                    alt={entry.label}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
