import { ReactElement } from 'react'

/**
 * Footer
 * @constructor
 */
const Footer = (): ReactElement => {
    return (
        <footer className="bg-zinc-800">
            <div className="mx-auto max-w-4xl overflow-hidden px-4 py-4 text-sm sm:px-6 lg:px-8">
                <div className="text-center">&copy; 2023 - All rights reserved.</div>
                <div className="text-center">
                    Built with <span title={`very much love`}>❤️</span> by{' '}
                    <a
                        href={'https://lucapattocchio.dev'}
                        className="underline-transition font-bold text-violet-500 after:bg-violet-500"
                    >
                        Luca Pattocchio
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
