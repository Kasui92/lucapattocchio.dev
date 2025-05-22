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
        label: 'Projects',
        url: '/projects',
    },
    blog: {
        label: 'Blog',
        url: '/blog',
    },
}
