import { ReactElement } from 'react'

/**
 * Footer
 * @constructor
 */
const Footer = (): ReactElement => {
    return (
        <footer>
            <div className="w-100 mx-auto mb-3 flex overflow-hidden px-5 text-sm md:w-3/5 md:px-0 xl:w-2/5">
                <div className="grow text-left">&copy; 2023 - All rights reserved.</div>
                <div className="grow text-right">
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
