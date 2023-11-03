import { ReactElement } from 'react'
import social from '@/config/social'

/**
 * Hero
 * @constructor
 */
const Hero = (): ReactElement => {
    return (
        <div className="container flex h-screen">
            <div className={`mx-auto flex items-center space-x-4`}>
                <div>
                    <h1 className={`text-center text-2xl font-bold uppercase tracking-wider md:text-4xl xl:text-6xl`}>
                        Ciao👋 I&apos;m&nbsp;
                        <span className="bg-gradient-to-r from-emerald-600 to-cyan-700 bg-clip-text font-extrabold text-transparent">
                            Luca Pattocchio
                        </span>
                    </h1>
                    <div className="mt-1 flex justify-center space-x-6">
                        {Object.entries(social).map(([key, entry]) => (
                            <a key={entry.label} href={entry.url}>
                                <span className="sr-only">{entry.label}</span>
                                <img
                                    className={`h-6 w-6 transition-opacity duration-300 hover:opacity-70`}
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
