import { ReactElement } from 'react'
import Link from '@/components/Link'
import social from '@/config/social'

import '@/components/Hero/Hero.styles.css'

/**
 * Hero
 * @constructor
 */
const Hero = (): ReactElement => {
    return (
        <section className="relative flex h-screen w-full">
            <div className={`mx-auto flex items-center`}>
                <div>
                    <h1 className={`text-center text-4xl font-bold uppercase tracking-wider xl:text-6xl`}>
                        Ciao{` `}👋{` `}
                        <span className={`inline-block`}>
                            I&apos;m&nbsp;
                            <span className="bg-gradient-to-r from-emerald-600 to-cyan-700 bg-clip-text font-extrabold text-transparent">
                                Luca Pattocchio
                            </span>
                        </span>
                    </h1>
                    <div className={`mt-3 px-6 text-center xl:mt-6`}>
                        Nerd Dad ~ Full Stack Developer @{' '}
                        <Link
                            className={`font-bold`}
                            color={`altuofianco`}
                            href={`https://altuofianco.it`}
                            title={`Go to Altuofianco website`}
                        >
                            Altuofianco Srl
                        </Link>
                    </div>
                    <div className="mt-4 flex justify-center space-x-6">
                        {Object.entries(social).map(([key, entry]) => (
                            <a key={entry.label} href={entry.url} title={entry.label}>
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
                <div className={`absolute bottom-[3%] left-1/2 -translate-x-1/2`}>
                    <div className={`mouse`} />
                </div>
            </div>
        </section>
    )
}

export default Hero
