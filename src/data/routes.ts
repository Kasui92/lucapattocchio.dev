export interface RoutesEntry {
    label: string
    url: string
}

export const routes: Record<string, RoutesEntry> = {
    about: {
        label: 'About',
        url: '/',
    },
    projects: {
        label: 'Works',
        url: '/works',
    },
    blog: {
        label: 'Blog',
        url: '/blog',
    },
}
