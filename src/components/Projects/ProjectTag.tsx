interface ProjectTagProps {
    color: string
    label: string
}

/**
 * ProjectTag
 * @param color
 * @param label
 * @param props
 * @constructor
 */
const ProjectTag = ({ color, label, ...props }: ProjectTagProps) => {
    return (
        <div
            className={`mb-2 mr-2 rounded-full ring-1 ring-[${color}] px-2 py-1 text-center text-xs font-bold text-[${color}]`}
            {...props}
        >
            {label}
        </div>
    )
}

export default ProjectTag
