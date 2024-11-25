import { ReactElement, useState } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import social from '@/data/social'

import wavingHand from '@/assets/images/emoji/waving-hand.svg'
import iconDownload from '@/assets/images/icons/generic/download.svg'
import iconArrowRight from '@/assets/images/icons/generic/arrow-right.svg'

import '@/components/Hero/Hero.styles.css'

/**
 * Hero
 * @constructor
 */
const Hero = (): ReactElement => {
    // Get the transition function
    const { t } = useTranslation()

    const [isContactHovered, setIsContactHovered] = useState<boolean>(false)

    return (
        <>
            <section id="hero" className="relative flex min-h-screen w-full items-center pt-24">
                <div className={`container mx-auto px-4 text-center`}>
                    <motion.div className="space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className={`gap-2 text-center text-4xl font-bold tracking-wider xl:text-6xl`}
                        >
                            {t('hero.title')}
                            <span className="bg-gradient-to-r from-emerald-600 to-cyan-700 bg-clip-text font-extrabold text-transparent">
                                Luca
                                <span className="ml-1 hidden md:inline-block">Pattocchio</span>
                            </span>
                            <img
                                className={`animate-wave mb-2.5 ml-2 inline-block h-[2.25rem] w-[2.25rem] xl:h-[3.75rem] xl:w-[3.75rem]`}
                                src={wavingHand}
                                alt={`Waving Hand!`}
                            />
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 1 }}
                            className={`mx-auto max-w-3xl text-center text-xl text-muted-foreground md:text-2xl`}
                        >
                            {t('hero.subtitle')}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex flex-col justify-center gap-4 sm:flex-row"
                        >
                            <button
                                className="focus-visible:ring-ring inline-flex h-11 items-center justify-center whitespace-nowrap rounded-lg bg-purple-600 px-8 text-sm font-semibold text-foreground ring-offset-background transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                onClick={() => window.open('/CV.pdf', '_blank')}
                            >
                                {t('hero.resume')}
                                <img
                                    src={iconDownload}
                                    alt="File Text Icon"
                                    className="ml-2 h-5 w-5"
                                    style={{ filter: 'invert(1)' }}
                                />
                            </button>
                            <a
                                href="#contact"
                                className="focus-visible:ring-ring group inline-flex h-11 items-center justify-center whitespace-nowrap rounded-lg border border-purple-600 px-8 text-sm font-semibold ring-offset-background transition-colors hover:bg-foreground/10 hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                onMouseEnter={() => setIsContactHovered(true)}
                                onMouseLeave={() => setIsContactHovered(false)}
                            >
                                {t('hero.contact')}
                                <motion.img
                                    initial={{ x: 0 }}
                                    animate={{ x: isContactHovered ? 5 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    src={iconArrowRight}
                                    alt="Arrow Right Icon"
                                    className="ml-2 h-5 w-5"
                                    style={{ filter: 'invert(1)' }}
                                />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.15, duration: 1 }}
                            className="mt-4 flex justify-center space-x-6"
                        >
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
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Hero
