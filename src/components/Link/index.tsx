import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
    color?: string
}

const Link: React.FC<LinkProps> = ({ children, color, className, ...props }) => {
    return (
        <a
            className={`relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full text-${color} after:bg-${color} ${className}`}
            {...props}
        >
            {children}
        </a>
    )
}

export default Link
