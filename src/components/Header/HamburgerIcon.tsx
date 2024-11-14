import { ReactElement } from 'react'

/**
 * Hamburger Icon
 * @constructor
 * @param {boolean} isToggle - Toggle state
 * @return {ReactElement}
 */
const HamburgerIcon = ({ isToggle }: { isToggle: boolean }): ReactElement => {
    return (
        <div className={`hamburger-icon relative h-3 w-5 ${isToggle ? 'toggle' : ''}`}>
            <span className="bg-foreground"></span>
            <span className="bg-foreground"></span>
        </div>
    )
}

export default HamburgerIcon
