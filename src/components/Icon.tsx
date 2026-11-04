import { type ComponentType, type SVGProps } from 'react'
import DownloadIcon from '@/assets/icons/download.svg?react'
import GitHubIcon from '@/assets/icons/github.svg?react'
import Menu2Icon from '@/assets/icons/menu-2.svg?react'
import MoonIcon from '@/assets/icons/moon.svg?react'
import SunIcon from '@/assets/icons/sun.svg?react'

interface IconProps {
    name: string
    className?: string
}

export function Icon({ name, className = '' }: IconProps) {
    const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
        github: GitHubIcon,
        download: DownloadIcon,
        'menu-2': Menu2Icon,
        sun: SunIcon,
        moon: MoonIcon,
    }

    const IconComponent = icons[name]

    if (!IconComponent) return null

    return <IconComponent className={className} />
}
