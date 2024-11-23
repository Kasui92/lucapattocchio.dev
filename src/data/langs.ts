import iconIt from '@/assets/images/icons/locales/it.svg'
import iconEn from '@/assets/images/icons/locales/en.svg'

interface Lang {
    nativeName: string
    icon: string
}

const langs: Record<string, Lang> = {
    en: {
        nativeName: 'English',
        icon: iconEn,
    },
    it: {
        nativeName: 'Italiano',
        icon: iconIt,
    },
}

export default langs
