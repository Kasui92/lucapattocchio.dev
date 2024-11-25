import { ReactElement, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useTranslation } from 'react-i18next'
import navLinks from '@/data/navlinks'

import HamburgerIcon from './HamburgerIcon'
import LanguageSwitcher from './LanguageSwitcher'

import '@/components/Header/Header.styles.css'

/**
 * Nav Variants for Header
 */
const navVariants = {
    top: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(8px)',
        margin: '20px 12px',
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
    scroll: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(12px)',
        margin: '8px 12px',
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
}

/**
 * Header
 * @constructor
 * @return {ReactElement} Header
 */
const Header = (): ReactElement => {
    // Get the transition
    const { t } = useTranslation()

    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [sectionOnScreen, setSectionOnScreen] = useState<string>('')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    // Get the scrollY position
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 20)
    })

    useMotionValueEvent(scrollY, 'change', () => {
        const section = navLinks.find((navLink) => {
            const element = document.getElementById(navLink.url)
            if (element) {
                const { top, bottom } = element.getBoundingClientRect()
                return top <= 0 && bottom > 0
            }
        })

        setSectionOnScreen(section ? section.url : '')
    })

    return (
        <motion.header
            className="fixed left-0 right-0 top-0 z-40 mx-auto flex w-full max-w-6xl justify-center transition-all duration-500 ease-in-out"
            initial="hidden"
            animate="visible"
        >
            <motion.nav
                className={`mx-3 mt-3 w-full rounded-2xl border border-[#a9a9a9] px-4 py-3 shadow-lg md:mx-4 md:mt-4 lg:mx-5 lg:mt-5`}
                variants={navVariants}
                initial="top"
                animate={isScrolled ? 'scroll' : 'top'}
            >
                <div className="flex items-center justify-between">
                    <motion.div className="flex space-x-1 sm:space-x-2" custom={0}>
                        <a
                            href="#"
                            className="cursor-pointer font-normal tracking-wide md:text-lg"
                            onClick={() => setSectionOnScreen('')}
                        >
                            @<span className="ml-1 font-semibold tracking-wide md:text-lg">kasui92</span>
                        </a>
                    </motion.div>

                    <div className="flex items-center justify-center gap-2 md:hidden">
                        <LanguageSwitcher headerVariants={navVariants} isScrolled={isScrolled} />
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[#F4F0E6] focus:outline-none"
                        >
                            <HamburgerIcon isToggle={isMobileMenuOpen} />
                        </motion.button>
                    </div>

                    <div className="hidden items-center justify-center md:flex">
                        <ul className="relative hidden gap-3 sm:gap-4 md:flex">
                            {navLinks.map((navLink, index) => (
                                <motion.li key={index} custom={index + 1}>
                                    <a href={`#${navLink.url}`}>
                                        <button
                                            onClick={() => setSectionOnScreen(navLink.url)}
                                            className={`group relative overflow-hidden rounded-lg px-2 py-1 font-normal tracking-wider transition duration-300 ease-in-out hover:scale-110 sm:px-3 sm:py-2`}
                                        >
                                            <span className={`relative z-10`}>{t(`navigation.${navLink.id}`)}</span>
                                            {sectionOnScreen === navLink.url && (
                                                <motion.span
                                                    layoutId="nav-underline"
                                                    className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground"
                                                    initial={false}
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 350,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}
                                            <motion.span
                                                className="absolute inset-0 rounded-lg bg-foreground/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                initial={false}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                            />
                                        </button>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <LanguageSwitcher headerVariants={navVariants} isScrolled={isScrolled} />
                    </div>
                </div>

                <AnimatePresence>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden md:hidden"
                    >
                        <ul className="mt-2 space-y-2 py-2">
                            {navLinks.map((navLink, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={`#${navLink.url}`}
                                        className="block px-4 text-sm font-medium text-foreground"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ x: -5 }}
                                    >
                                        {t(`navigation.${navLink.id}`)}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </motion.nav>
        </motion.header>
    )
}

export default Header
