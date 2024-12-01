import { ReactElement } from 'react'

/**
 * Footer
 * @constructor
 */
export const Footer = (): ReactElement => {
    return (
        <footer className="mt-12">
            <div className="flex justify-center space-x-2 text-sm text-silver-500/80">
                <span>© 2024 Luca Pattocchio.</span>
                <span>All Rights Reserved.</span>
            </div>
        </footer>
    )
}
