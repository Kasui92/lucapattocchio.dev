import iconIt from '@/assets/images/icons/locale/it.svg'
import iconEn from '@/assets/images/icons/locale/en.svg'

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
