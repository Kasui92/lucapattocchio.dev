export function date2Period(date: string): string {
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

    return `${months[parseInt(month) - 1]} ${year}`
}
