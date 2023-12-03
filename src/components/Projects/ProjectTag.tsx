import React, { ReactElement } from 'react'

interface ProjectTagProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string
}

interface ProjectTagSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string
    active: boolean
}

/**
 * ProjectTagSelector
 * @param label
 * @param active
 * @param props
 * @constructor
 */
export const ProjectTagSelector = ({ label, active, ...props }: ProjectTagSelectorProps): ReactElement => {
    return (
        <div
            className={`mx-1 cursor-pointer rounded-full px-3 py-2 text-center text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                active ? `bg-violet-500` : `bg-slate-500 hover:bg-violet-500`
            }`}
            {...props}
        >
            {label}
        </div>
    )
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
