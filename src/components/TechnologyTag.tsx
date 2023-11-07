/**
 * TechnologyTag Props
 */
interface TechnologyTagProps {
    icon?: string
    label: string
}

/**
 * TechnologyTag
 * @param icon
 * @param label
 * @param props
 * @constructor
 */
const TechnologyTag = ({ icon, label, ...props }: TechnologyTagProps) => {
    return (
        <div
            className={`m-1 inline-flex cursor-pointer items-center rounded-md px-2 py-1 ring-1 ring-inset ring-violet-500 transition-colors duration-300 hover:bg-violet-500 hover:text-white`}
            {...props}
        >
            {icon && (
                <img
                    className={`inline-block h-5 w-5`}
                    src={`/assets/logos/technologies/${icon}.svg`}
                    alt={`${label} logo`}
                />
            )}
            <span className={`ml-1 text-xl font-semibold`}>{label}</span>
        </div>
    )
}

export default TechnologyTag
