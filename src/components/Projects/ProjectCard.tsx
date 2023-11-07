import { Project } from '@/config/projects'
import TechnologyTag from '@/components/TechnologyTag'

import stack from '@/config/stack'

/**
 * ProjectCard
 * @param project
 * @param props
 * @constructor
 */
const ProjectCard = ({ project, ...props }: { project: Project }) => {
    return (
        <a
            className={`relative mb-4 w-full rounded-xl border transition duration-300 ease-in-out hover:scale-110 `}
            href={project.url}
            aria-label={`Go to ${project.title} website`}
            target={`_blank`}
            rel={`noopener noreferrer`}
            {...props}
        >
            <div className={`h-100 relative`}>
                <div className={`relative flex flex-col items-start rounded p-4`}>
                    <div className={`my-4`}>
                        <img className={`mr-4 h-12 w-12`} src={project.image} alt={`${project.title} Logo`} />
                    </div>
                    <h4 className={`tracking-tigh text-xl font-bold`}>{project.title}</h4>
                    <div className={`pt-4 leading-6 `}>{project.description}</div>
                    <div className={`flex flex-wrap pt-4 md:flex-row`}>
                        {project.technologies.map((technology, index) => {
                            // Retrieve technology info from stack
                            const technologyInfo = stack.find((item) => item.label === technology)

                            return (
                                <TechnologyTag
                                    icon={technologyInfo?.icon}
                                    label={technologyInfo?.label || technology}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard
