import { ReactElement, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import social from '@/data/social'

import wavingHand from '@/assets/images/emoji/waving-hand.svg'

import '@/components/Hero/Hero.styles.css'

/**
 * MouseScroll
 * @constructor
 */
const MouseScroll = (): ReactElement => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 20)
    })

    return (
        <div
            className={`absolute bottom-[3%] left-1/2 -translate-x-1/2 transition-opacity delay-150 duration-500 ease-in-out ${
                isScrolled ? `opacity-0` : `opacity-100`
            }`}
        >
            <div className="arrow"></div>
        </div>
    )
}

/**
 * Hero
 * @constructor
 */
const Hero = (): ReactElement => {
    return (
        <section className="relative flex h-screen w-full">
            <div className={`mx-auto flex items-center`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h1 className={`text-center text-4xl font-bold uppercase tracking-wider xl:text-6xl`}>
                        Ciao
                        <img
                            className={`mx-2 mb-2.5 inline-block h-[2.25rem] w-[2.25rem] xl:h-[3.75rem] xl:w-[3.75rem]`}
                            src={wavingHand}
                            alt={`Waving Hand!`}
                        />
                        <span className={`inline-block`}>
                            I&apos;m&nbsp;
                            <span className="bg-gradient-to-r from-emerald-600 to-cyan-700 bg-clip-text font-extrabold text-transparent">
                                Luca Pattocchio
                            </span>
                        </span>
                    </h1>
                    <div className={`mt-2.5 px-6 text-center xl:mt-6`}>
                        Nerd Dad ~ Full Stack Developer @{' '}
                        <a
                            className={`underline-transition font-bold text-altuofianco after:bg-altuofianco`}
                            href={`https://altuofianco.it`}
                            title={`Go to Altuofianco website`}
                        >
                            Altuofianco Srl
                        </a>
                    </div>
                    <div className="mt-4 flex justify-center space-x-6">
                        {Object.entries(social).map(([, entry]) => (
                            <a key={entry.label} href={entry.url} title={entry.label}>
                                <span className="sr-only">{entry.label}</span>
                                <img
                                    className={`h-6 w-6 transform transition-transform hover:rotate-12 hover:scale-110`}
                                    src={entry.icon}
                                    alt={entry.label}
                                />
                            </a>
                        ))}
                    </div>
                </motion.div>
                <MouseScroll />
            </div>
        </section>
    )
}

export default Hero
