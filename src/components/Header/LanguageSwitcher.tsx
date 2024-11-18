import { motion, Variants } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import langs from '@/data/langs'

/**
 * LanguageSwitcher component
 * @param {Record<string, Variant>} headerVariants - Header variants
 * @param {boolean} isScrolled - Is the header scrolled
 * @returns {JSX.Element} LanguageSwitcher component
 * @constructor
 */
const LanguageSwitcher = ({
    headerVariants,
    isScrolled,
}: {
    headerVariants: Variants
    isScrolled: boolean
}): JSX.Element => {
    // Get the i18n instance from the hook
    const { i18n } = useTranslation()
    // State to manage the dropdown
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const handleCloseMenu = () => setIsMenuOpen(false)
    const [selectedLang, setSelectedLang] = useState(i18n.language)

    /**
     * Menu language switcher variants
     * @returns {Variants} Menu language switcher variants
     * @constructor
     */
    const menuLanguageSwitcherVariants = useMemo((): Variants => {
        // scroll top and scroll variants and remove margin props
        const { top, scroll } = headerVariants

        return {
            top: {
                ...top,
                margin: '',
            },
            scroll: {
                ...scroll,
                margin: '',
            },
        }
    }, [headerVariants])

    /**
     * Handle language change
     * @param {string} lang - Language code
     * @returns {void}
     */
    const handleLanguageChange = (lang: string): void => {
        i18n.changeLanguage(lang)
        setSelectedLang(lang)
        setIsMenuOpen(false)
    }

    // when click outside the dropdown, close it
    useEffect(() => {
        /**
         * Handles the click event outside of the language switcher menu and button.
         * If the click is detected outside of these elements, it triggers the handleCloseMenu function after a delay.
         *
         * @param event - The mouse event triggered by the click.
         *
         * @remarks
         * The delay is added to ensure any other click-related events are processed before closing the menu.
         */
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById('language-switcher-menu')
            const button = document.getElementById('language-switcher')
            if (menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
                setTimeout(() => {
                    handleCloseMenu()
                }, 100)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <div className="relative inline-block text-left">
            <button
                id="language-switcher"
                type="button"
                className="inline-flex w-full justify-center rounded-md border-none px-4 py-2 text-sm font-medium shadow-sm transition duration-300 ease-in-out hover:bg-foreground/10 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <img
                    src={langs[selectedLang].icon}
                    alt={langs[selectedLang].nativeName}
                    // the image fit with the entire button size
                    className="inline-block h-5 w-5 object-cover"
                />
            </button>

            {isMenuOpen && (
                <motion.div
                    id="language-switcher-menu"
                    variants={menuLanguageSwitcherVariants}
                    initial="top"
                    animate={isScrolled ? 'scroll' : 'top'}
                    className="absolute right-0 mt-4 w-28 origin-top-right rounded-md border border-[#a9a9a9] shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <div className="py-1">
                        {Object.keys(langs).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleLanguageChange(lang)}
                                className="flex w-full items-center px-4 py-2 text-left text-sm text-foreground hover:bg-foreground/10"
                            >
                                <img src={langs[lang].icon} alt={langs[lang].nativeName} className="inline-block h-5 w-5" />
                                <span className="ml-2">{langs[lang].nativeName}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default LanguageSwitcher
