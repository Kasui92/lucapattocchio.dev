import { ReactElement } from 'react'

import social from '@/config/social'

/**
 * Footer
 * @constructor
 */
const Footer = (): ReactElement => {
    return (
        <footer className="bg-zinc-800">
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
                <div className="mt-8 flex justify-center space-x-6">
                    {Object.entries(social).map(([key, entry]) => (
                        <a key={entry.label} href={entry.url}>
                            <span className="sr-only">{entry.label}</span>
                            <img className={`h-6 w-6 hover:opacity-70`} src={`/assets/icons/${key}.svg`} alt={entry.label} />
                        </a>
                    ))}
                </div>
                <div className="mt-8 text-center text-base">&copy; 2023 - All rights reserved.</div>
                <div className="text-center text-base">
                    Built with ❤️ by{' '}
                    <a href={'https://lucapattocchio.dev'} className="font-bold text-violet-500">
                        Luca Pattocchio
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
