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
