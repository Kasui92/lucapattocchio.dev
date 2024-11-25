import React, { ReactElement } from 'react'

interface ProjectTagProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string
}

/**
 * ProjectCardTag
 * @param label
 * @param props
 * @constructor
 */
export const ProjectTag = ({ label, ...props }: ProjectTagProps): ReactElement => {
    return (
        <div className={`px-2 py-1 text-center text-xs uppercase italic tracking-wider text-white`} {...props}>
            {label}
        </div>
    )
}
