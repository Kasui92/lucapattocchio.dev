import { ReactElement } from 'react'

/**
 * Footer
 * @constructor
 */
const Footer = (): ReactElement => {
    return (
        <footer className="bg-zinc-800">
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-4 text-sm sm:px-6 lg:px-8">
                <div className="text-center">&copy; 2023 - All rights reserved.</div>
                <div className="text-center">
                    Built with ❤️ by{' '}
                    <a href={'https://lucapattocchio.dev'} className="font-bold text-violet-500 hover:underline">
                        Luca Pattocchio
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
