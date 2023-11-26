import React, { ReactElement } from 'react'

interface ProjectTagProps extends React.HTMLAttributes<HTMLDivElement> {
    color: string
    label: string
    className?: string
}

/**
 * ProjectTag
 * @param color
 * @param label
 * @param className
 * @param props
 * @constructor
 */
const ProjectTag = ({ color, label, className, ...props }: ProjectTagProps): ReactElement => {
    return (
        <div
            className={`mb-2 mr-2 rounded-full ring-1 ring-[${color}] px-2 py-1 text-center text-xs font-bold ${
                className && ` ${className}`
            }`}
            {...props}
        >
            {label}
        </div>
    )
}

export default ProjectTag
