import type { Social } from '@/types/socials'

export function date2Period(date: string, short = false): string {
    const [year, month] = date.split('-')

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    // Determine the month label based on the 'short' flag
    const monthLabel = short ? months[parseInt(month) - 1].slice(0, 3) : months[parseInt(month) - 1]

    return `${monthLabel} ${year}`
}

export function currentYear(): number {
    return new Date().getFullYear()
}

export function shortHash(input: string): string {
    let hash = 0x811c9dc5

    for (const char of input) {
        hash ^= char.charCodeAt(0)
        hash = Math.imul(hash, 0x01000193)
    }

    return (hash >>> 0).toString(16).padStart(8, '0').slice(0, 7)
}

export function displayUrl(url: string): string {
    return url.replace(/^(https?:\/\/(www\.)?|mailto:)/, '').replace(/\/$/, '')
}

export function groupSocials(socials: Social[]): Social[][] {
    return (['code', 'social', 'contact'] as const)
        .map((group) => socials.filter((social) => social.group === group).toSorted((a, b) => a.order - b.order))
        .filter((items) => items.length > 0)
}
